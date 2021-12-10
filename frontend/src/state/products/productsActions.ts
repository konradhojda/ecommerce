import { createAction } from "redux-actions";
import { IProductEntry } from "./productsState";

const prefix = "products";

export const ActionNames = {
  PRODUCT_LIST_FAIL: `[${prefix}] PRODUCT_LIST_FAIL`,
  PRODUCT_LIST_REQUEST: `[${prefix}] PRODUCT_LIST_REQUEST`,
  PRODUCT_LIST_SUCCESS: `[${prefix}] PRODUCT_LIST_SUCCESS`,
};

export type ActionTypes = string & IProductEntry[];

export const PRODUCT_LIST_REQUEST = createAction(
  ActionNames.PRODUCT_LIST_REQUEST
);
export const PRODUCT_LIST_SUCCESS = createAction<IProductEntry[]>(
  ActionNames.PRODUCT_LIST_SUCCESS
);
export const PRODUCT_LIST_FAIL = createAction<string>(
  ActionNames.PRODUCT_LIST_FAIL
);
