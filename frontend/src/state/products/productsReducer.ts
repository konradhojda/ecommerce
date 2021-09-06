import { IProductsEntry, IProductsState } from "./productsState";
import { handleActions, Action } from "redux-actions";
import {
  ActionNames,
  ActionTypes,
  PRODUCT_LIST_SUCCESS,
} from "./productsActions";

const initialState: IProductsState = {
  data: [],
  loading: true,
  error: "",
};

const reducer = handleActions<IProductsState, ActionTypes>(
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

export default reducer;
