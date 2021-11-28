import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { CART_ADD_ITEM } from "../state/cart/cartActions";
import * as api from "../common/api";
import { useProductCart } from "../state/cart/cartSelector";

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
    <div>
      <h1>Cart screen</h1>
      <p>
        Product id: {id}, quantity: {quantity}
      </p>
    </div>
  );
};

export default CartScreen;
