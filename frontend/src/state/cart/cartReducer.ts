import { handleActions, Action } from "redux-actions";
import { ActionTypes, ActionNames } from "./cartActions";
import { ICartState } from "./cartState";
import { IProductsEntry } from "../products/productsState";

const initialState: ICartState = {
  cartItems: [],
};

const cartReducer = handleActions<ICartState, ActionTypes>(
  {
    [ActionNames.CART_ADD_ITEM]: (state, action: Action<ActionTypes>) => {
      const item = action.payload;
      const existItem = state.cartItems.find(
        (x: IProductsEntry) => x._id === item._id
      );
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x: any) =>
              x._id === existItem._id ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    },
  },
  initialState
);

export default cartReducer;
