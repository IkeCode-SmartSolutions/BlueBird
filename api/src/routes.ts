import {
    prefixGetAllAction,
    prefixGetByIdAction,
    prefixSaveAction
} from "./controller/PrefixController";

import {
    prefixCategoryGetAllAction,
    prefixCategoryGetByIdAction,
    prefixCategorySaveAction
} from "./controller/PrefixCategoryController";

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/prefixes",
        method: "get",
        action: prefixGetAllAction
    },
    {
        path: "/prefixes/:id",
        method: "get",
        action: prefixGetByIdAction
    },
    {
        path: "/prefixes",
        method: "post",
        action: prefixSaveAction
    },
    {
        path: "/prefix-categories",
        method: "get",
        action: prefixCategoryGetAllAction
    },
    {
        path: "/prefix-categories/:id",
        method: "get",
        action: prefixCategoryGetByIdAction
    },
    {
        path: "/prefix-categories",
        method: "post",
        action: prefixCategorySaveAction
    }
];