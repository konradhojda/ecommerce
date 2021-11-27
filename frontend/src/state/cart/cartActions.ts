import { createAction } from "redux-actions";
import { IProductsEntry } from "../products/productsState";

const prefix = "cart";

export const ActionNames = {
  CART_ADD_ITEM: `[${prefix}] CART_ADD_ITEM`,
};

export type ActionTypes = string & CART_ADD_ITEM_ACTION;

export interface CART_ADD_ITEM_ACTION extends IProductsEntry {
  quantity: number | null;
}

export const CART_ADD_ITEM = createAction<CART_ADD_ITEM_ACTION>(
  ActionNames.CART_ADD_ITEM
);
