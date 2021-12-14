import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { _createStore } from "./store";
import { IAppState } from "./state/state";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";

export const InitialState: Partial<IAppState> = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems") || "")
      : [],
  },
};

const store = _createStore({ ...InitialState });

window._getState = () => store.getState();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
