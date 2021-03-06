import { handleActions, Action } from "redux-actions";
import {
  ActionTypes,
  ActionNames,
  CART_ADD_ITEM_ACTION,
  CART_REMOVE_ITEM,
} from "./cartActions";
import { ICartEntry, ICartState } from "./cartState";
import { IProductEntry } from "../products/productsState";

const initialState: ICartState = {
  cartItems: [],
};

const cartReducer = handleActions<ICartState, ActionTypes>(
  {
    [ActionNames.CART_ADD_ITEM]: (
      state,
      action: Action<CART_ADD_ITEM_ACTION>
    ) => {
      const item = action.payload;
      const existItem = state.cartItems.find(
        (x: ICartEntry) => x._id === item._id
      );
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x: ICartEntry) =>
            x._id === existItem._id ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    },
    [ActionNames.CART_REMOVE_ITEM]: (
      state,
      action: Action<CART_REMOVE_ITEM>
    ) => {
      const { _id } = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.filter((el) => _id !== el._id),
      };
    },
  },
  initialState
);

export default cartReducer;
