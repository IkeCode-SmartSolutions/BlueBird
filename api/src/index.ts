import "reflect-metadata";
import { createConnection } from "typeorm";
import * as Koa from "koa";
import * as Router from "koa-router";
import * as bodyParser from "koa-bodyparser";
import { AppRoutes } from "./routes";

// create connection with database
// note that its not active database connection
// TypeORM creates you connection pull to uses connections from pull on your requests
createConnection().then(async connection => {

    // create koa app
    const app = new Koa();
    const router = new Router();

    const apiVersion = 1;
    const apiUrlPrefix = `/api/v${apiVersion}`;

    // register all application routes
    AppRoutes.forEach(route => router[route.method](`${apiUrlPrefix}${route.path}`, route.action));

    app.use(async (ctx, next) => {
        // console.log('Headers');
        // console.log('', ctx.headers);

        // if (ctx.method === "POST" || ctx.method === "PUT") {
        //     console.log('Body');
        //     console.log('', ctx.request.body);
        // }

        const start: Date = new Date();
        await next();
        const ms = (new Date()).valueOf() - start.valueOf();
        ctx.set('X-Response-Time', `${ms}ms`);

        console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    });

    app.on('error', (err, ctx) =>
        console.error('server error', err, ctx)
    );

    // run app
    app.use(bodyParser());
    app.use(router.routes());
    app.use(router.allowedMethods());

    app.listen(3000);

    console.log("BlueBird API is up and running on port 3000");
    console.log(`${apiUrlPrefix}`);

}).catch(error => console.log("TypeORM connection error: ", error));