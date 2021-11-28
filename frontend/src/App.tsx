import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import { useProductCart } from "./state/cart/cartSelector";

export const routeTo = {
  productScreen: (id: number) => `/product/:id`,
  cartScreen: (id: string, quantity: number = 1) =>
    `/cart/${id}?quantity=${quantity}`,
};

export const path = {
  home: "/",
  productScreen: "/product/:id?",
  cartScreen: "/cart/:id?",
};

function App() {
  const { cartItems } = useProductCart();
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link to="/">E-commerce</Link>
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>
          <Route path={path.productScreen} component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path={path.cartScreen} component={CartScreen} />
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
