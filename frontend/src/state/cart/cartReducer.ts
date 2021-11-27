import { handleActions, Action } from "redux-actions";
import { ActionTypes, ActionNames } from "./cartActions";
import { ICartState } from "./cartState";

const initialState = {
  cartItems: [],
};

const cartReducer = handleActions<any, ActionTypes>(
  {
    [ActionNames.CART_ADD_ITEM]: (state, action: Action<any>) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x: any) => x._id === item._id);
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
