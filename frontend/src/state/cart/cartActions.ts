import { createAction } from "redux-actions";
import { IProductEntry } from "../products/productsState";
import { ICartEntry } from "./cartState";

const prefix = "cart";

export const ActionNames = {
  CART_ADD_ITEM: `[${prefix}] CART_ADD_ITEM`,
  CART_REMOVE_ITEM: `[${prefix}] CART_REMOVE_ITEM`,
};

export type ActionTypes = string & CART_ADD_ITEM_ACTION & CART_REMOVE_ITEM;

export interface CART_REMOVE_ITEM extends ICartEntry {}
export interface CART_ADD_ITEM_ACTION extends ICartEntry {}

export const CART_ADD_ITEM = createAction<CART_ADD_ITEM_ACTION>(
  ActionNames.CART_ADD_ITEM
);

export const CART_REMOVE_ITEM = createAction(ActionNames.CART_REMOVE_ITEM);
