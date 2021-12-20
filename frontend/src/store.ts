import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import productsReducer from "./state/products/productsReducer";
import productsDetailsReducer from "./state/productDetails/productsDetailsReducer";
import { IAppState } from "./state/state";
import cartReducer from "./state/cart/cartReducer";
import { IProductEntry } from "./state/products/productsState";
import userLoginReducer from "./state/userLogin/userLoginReducer";

const composeEnhancers = composeWithDevTools || compose;

const reducer = combineReducers<IAppState>({
  products: productsReducer,
  productsDetails: productsDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
});

export const _createStore = (initialState: Partial<IAppState> = {}) => {
  return createStore(
    reducer,
    { ...initialState },
    composeEnhancers(applyMiddleware(thunk))
  );
};
