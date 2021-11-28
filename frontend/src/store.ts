import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import productsReducer from "./state/products/productsReducer";
import productsDetailsReducer from "./state/productDetails/productsDetailsReducer";
import { IAppState } from "./state/state";
import cartReducer from "./state/cart/cartReducer";
import { IProductsEntry } from "./state/products/productsState";

const composeEnhancers = composeWithDevTools || compose;

const reducer = combineReducers<IAppState>({
  products: productsReducer,
  productsDetails: productsDetailsReducer,
  cart: cartReducer,
});

const state: Partial<IAppState> = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems") || "")
      : [],
  },
};

console.log(state, localStorage.getItem("cartItems"));

export const _createStore = (initialState: Partial<IAppState> = {}) => {
  return createStore(
    reducer,
    { ...initialState, ...state },
    composeEnhancers(applyMiddleware(thunk))
  );
};
