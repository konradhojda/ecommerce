import React from "react";
import { useProductCart } from "./state/cart/cartSelector";
import Header from "./components/Header/Header";
import AppRouter from "./AppRouter";

export const routeTo = {
  productScreen: (id: number) => `/product/:id`,
  cartScreen: (id: string, quantity: number = 1) =>
    `/cart/${id}?quantity=${quantity}`,
  signin: () => `/signin`,
  register: () => `/register`,
  addItem: () => `/admin/additem`,
};

export const path = {
  home: "/",
  productScreen: "/product/:id?",
  cartScreen: "/cart/:id?",
  signin: "/signin",
  register: "/register",
  addItem: "/admin/additem",
};

function App(children: any) {
  const { cartItems } = useProductCart();
  return (
    <div className="grid-container">
      <Header cartItems={cartItems} />
      <main>
        <AppRouter />
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
