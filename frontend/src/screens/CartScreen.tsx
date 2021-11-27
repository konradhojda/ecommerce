import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { CART_ADD_ITEM } from "../state/cart/cartActions";
import * as api from "../common/api";

const CartScreen = (props: RouteComponentProps<{ id: string }>) => {
  const id = props.match.params.id;
  const search = window.location.search;
  const quantity = Number(new URLSearchParams(search).get("quantity"));
  const dispatch = useDispatch();

  const addItemToCart = async () => {
    try {
      const response = await api.getSingleProduct(id);
      dispatch(CART_ADD_ITEM({...response, quantity}));
    } catch {}
  };

  useEffect(() => {
    addItemToCart();
  }, []);
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
