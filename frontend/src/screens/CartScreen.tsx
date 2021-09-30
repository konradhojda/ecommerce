import React from "react";
import { RouteComponentProps } from "react-router-dom";

const CartScreen= (props: RouteComponentProps<{ id: string }>) => {
  const id = props.match.params.id
  const search = window.location.search;
  const quantity = new URLSearchParams(search).get('quantity')
  
  return (
    <div>
      <h1>Cart screen</h1>
      <p>Product id: {id}, quantity: {quantity}</p>
    </div>
  );
};

export default CartScreen;
