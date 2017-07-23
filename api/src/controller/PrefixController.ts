import { Context } from "koa";
import { getEntityManager } from "typeorm";
import { Prefix } from "../entity/models";

/**
 * Save Prefix to database
 */
export async function prefixSaveAction(context: Context) {
    const prefixRepository = getEntityManager().getRepository(Prefix);

    const newPrefix = prefixRepository.create(context.request.body);

    await prefixRepository.persist(newPrefix);

    context.body = newPrefix;
}

/**
 * Loads Prefix by a given id.
 */
export async function prefixGetByIdAction(context: Context) {
    const prefixRepository = getEntityManager().getRepository(Prefix);

    const post = await prefixRepository.findOneById((context as any).params.id);

    if (!post) {
        context.status = 404;
        return;
    }

    context.body = post;
}

/**
 * Loads all prefix from the database.
 */
export async function prefixGetAllAction(context: Context) {

    const prefixRepository = getEntityManager().getRepository(Prefix);

    const prefixes = await prefixRepository.find();

    context.body = prefixes;
}