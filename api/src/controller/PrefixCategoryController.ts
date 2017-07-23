import { Context } from "koa";
import { getEntityManager } from "typeorm";
import { PrefixCategory } from "../entity/models";

/**
 * Save PrefixCategory to database
 */
export async function prefixCategorySaveAction(context: Context) {
    const prefixRepository = getEntityManager().getRepository(PrefixCategory);
    
    const newPrefix = prefixRepository.create(context.request.body);

    await prefixRepository.persist(newPrefix);

    context.body = newPrefix;
}

/**
 * Loads PrefixCategory by a given id.
 */
export async function prefixCategoryGetByIdAction(context: Context) {
    const prefixRepository = getEntityManager().getRepository(PrefixCategory);

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
export async function prefixCategoryGetAllAction(context: Context) {

    const prefixRepository = getEntityManager().getRepository(PrefixCategory);

    const prefixes = await prefixRepository.find();

    context.body = prefixes;
}