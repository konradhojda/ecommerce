import { IProductsEntry, IProductsState } from "./productsState";
import { handleActions, Action } from "redux-actions";
import { ActionNames, ActionTypes } from "./productsActions";

const initialState: IProductsState = {
  data: [],
  loading: true,
  error: "",
};

const productsReducer = handleActions<IProductsState, ActionTypes>(
  {
    [ActionNames.PRODUCT_LIST_REQUEST]: (state, action: Action<string>) => {
      return {
        ...state,
        loading: true,
      };
    },
    [ActionNames.PRODUCT_LIST_SUCCESS]: (
      state,
      action: Action<IProductsEntry[]>
    ) => {
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: "",
      };
    },
    [ActionNames.PRODUCT_LIST_FAIL]: (state, action: Action<string>) => {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    },
  },
  initialState
);

export default productsReducer;
