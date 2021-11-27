import { createAction } from "redux-actions";

const prefix = 'cart';

export const ActionNames = {
  CART_ADD_ITEM: `[${prefix}] CART_ADD_ITEM`
};

export type ActionTypes = string;

export const CART_ADD_ITEM = createAction(ActionNames.CART_ADD_ITEM);
