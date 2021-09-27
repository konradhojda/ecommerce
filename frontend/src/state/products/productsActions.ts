import { createAction } from "redux-actions";
import { IProductsEntry } from "./productsState";

const prefix = "products";

export const ActionNames = {
  PRODUCT_LIST_FAIL: `[${prefix}] PRODUCT_LIST_FAIL`,
  PRODUCT_LIST_REQUEST: `[${prefix}] PRODUCT_LIST_REQUEST`,
  PRODUCT_LIST_SUCCESS: `[${prefix}] PRODUCT_LIST_SUCCESS`,
};

export type ActionTypes = string & IProductsEntry[];

export const PRODUCT_LIST_REQUEST = createAction(
  ActionNames.PRODUCT_LIST_REQUEST
);
export const PRODUCT_LIST_SUCCESS = createAction<IProductsEntry[]>(
  ActionNames.PRODUCT_LIST_SUCCESS
);
export const PRODUCT_LIST_FAIL = createAction<string>(
  ActionNames.PRODUCT_LIST_FAIL
);
