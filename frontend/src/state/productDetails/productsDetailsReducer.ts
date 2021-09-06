import { IProductsEntry } from "../products/productsState";
import { IProductsState, IProductState } from "../products/productsState";
import { handleActions, Action } from "redux-actions";
import {
  ActionNames,
  ActionTypes,
  PRODUCT_DETAIL_SUCCESS,
} from "./productsDetailsActions";

const initialState: IProductState = {
  data: {
    _id: "",
    name: "",
    category: "",
    image: "",
    price: 0,
    countInStock: 0,
    brand: "",
    rating: 0,
    numReviews: 0,
    description: "",
  },
  loading: false,
  error: "",
};

// @ts-ignore
const reducer = handleActions<IDetailsProduct, ActionTypes>(
  {
    [ActionNames.PRODUCT_DETAIL_REQUEST]: (state, action: Action<string>) => {
      const data = {}
      return {
        ...state,
        loading: true,
      };
    },
    [ActionNames.PRODUCT_DETAIL_SUCCESS]: (
      state,
      action: Action<IProductsEntry>
    ) => {
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    },
    [ActionNames.PRODUCT_DETAIL_FAIL]: (state, action: Action<string>) => {
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
