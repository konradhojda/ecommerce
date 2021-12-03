// noinspection JSRemoveUnnecessaryParentheses

import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, RouteComponentProps } from "react-router-dom";
import { CART_ADD_ITEM } from "../state/cart/cartActions";
import * as api from "../common/api";
import { useProductCart } from "../state/cart/cartSelector";
import MessageBox from "../components/MessageBox";

const CartScreen = (props: RouteComponentProps<{ id: string }>) => {
  const id = props.match.params.id;
  const search = window.location.search;
  const quantity = Number(new URLSearchParams(search).get("quantity"));
  const dispatch = useDispatch();
  const { cartItems } = useProductCart();

  const addItemToCart = useCallback(async () => {
    try {
      const response = await api.getSingleProduct(id);
      dispatch(CART_ADD_ITEM({ ...response, quantity }));
      //todo: with epic as side effect add to localStorage
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } catch {}
  }, [cartItems]);

  useEffect(() => {
    addItemToCart();
  }, [cartItems]);

  return (
    <div className="row top">
      <div className="col-2">
        <h1>Shopping Cart</h1>
        {cartItems.length ? (
          <ul>
            {cartItems.map((item) => (
              <li key={item._id}>
                <img src={item.image} alt={item.name} className="small" />
                <div className="min-30">
                  <Link to={`/product/${item._id}`}>{item.name}</Link>
                </div>
                <div>
                  {item.quantity}
                  <select value={item.quantity} />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <MessageBox>
            <Link to="/">Go Shopping</Link>
          </MessageBox>
        )}
      </div>
    </div>
  );
};

export default CartScreen;
