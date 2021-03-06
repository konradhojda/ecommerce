import { createAction } from "redux-actions";
import { IProductEntry } from "../products/productsState";

const prefix = "productsDetails";

export const ActionNames = {
  PRODUCT_DETAIL_FAIL: `[${prefix}] PRODUCT_DETAIL_FAIL`,
  PRODUCT_DETAIL_REQUEST: `[${prefix}] PRODUCT_DETAIL_REQUEST`,
  PRODUCT_DETAIL_SUCCESS: `[${prefix}] PRODUCT_DETAIL_SUCCESS`,
};

export type ActionTypes = IProductEntry & string;

export const PRODUCT_DETAIL_REQUEST = createAction(
  ActionNames.PRODUCT_DETAIL_REQUEST
);
export const PRODUCT_DETAIL_SUCCESS = createAction<IProductEntry>(
  ActionNames.PRODUCT_DETAIL_SUCCESS
);
export const PRODUCT_DETAIL_FAIL = createAction<string>(
  ActionNames.PRODUCT_DETAIL_FAIL
);
