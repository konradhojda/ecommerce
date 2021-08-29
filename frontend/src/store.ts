import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import productsReducer from "./state/products/productsReducer";
import {IAppState} from "./state/state";

const composeEnhancers = composeWithDevTools || compose;

const reducer = combineReducers<IAppState>({
  products: productsReducer
})

// const store = createStore(reducer, initialState , composeEnhancers(applyMiddleware(thunk)));

export const _createStore = (initialState: Partial<IAppState> = {}) => {
  return createStore(reducer, {...initialState}, composeEnhancers(applyMiddleware(thunk)));
}