// noinspection JSRemoveUnnecessaryParentheses

import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, RouteComponentProps } from "react-router-dom";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../state/cart/cartActions";
import * as api from "../common/api";
import { useProductCart } from "../state/cart/cartSelector";
import MessageBox from "../components/MessageBox";
import cartReducer from "../state/cart/cartReducer";

const CartScreen = (props: RouteComponentProps<{ id: string }>) => {
  const id = props.match.params.id;
  const search = window.location.search;
  const quantity = Number(new URLSearchParams(search).get("quantity"));
  const dispatch = useDispatch();
  const { cartItems } = useProductCart();

  const handleAddToCart = useCallback(
    async (id: string, quantity: number) => {
      try {
        const response = await api.getSingleProduct(id);
        await dispatch(CART_ADD_ITEM({ ...response, quantity }));
        //todo: with epic as side effect add to localStorage
      } catch (error) {
        throw error;
      }
    },
    [cartItems]
  );
  useEffect(() => {
    handleAddToCart(id, quantity);
  }, []);

  const handleRemoveItem = (_id: string) => {
    dispatch(CART_REMOVE_ITEM({ _id }));
  };

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="row top">
      <div className="col-2">
        <h1>Shopping Cart</h1>
        {cartItems.length ? (
          <ul>
            {cartItems.map((item) => (
              <li key={item._id}>
                <div className="row">
                  <img src={item.image} alt={item.name} className="small" />
                  <div className="min-30">
                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item?.quantity}
                      onChange={(e) =>
                        handleAddToCart(item._id, Number(e.target.value))
                      }
                    >
                      {
                        // @ts-ignore
                        [...Array(item.countInStock).keys()].map(
                          (e: number) => (
                            <option key={e + 1} value={e + 1}>
                              {e + 1}
                            </option>
                          )
                        )
                      }
                    </select>
                  </div>
                  <div>${item.price}</div>
                  <div>
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(item._id)}
                    >
                      Delete
                    </button>
                  </div>
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
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Subtotal ({cartItems.reduce((a, cart) => a + cart.quantity, 0)}{" "}
                items) : $
                {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
              </h2>
            </li>
            <li>
              <button
                type="button"
                onClick={checkoutHandler}
                className="primary block"
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
