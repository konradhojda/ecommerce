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

  const addItemToCart = useCallback(
    async (id: string, quantity: number) => {
      try {
        const response = await api.getSingleProduct(id);
        dispatch(CART_ADD_ITEM({ ...response, quantity }));
        //todo: with epic as side effect add to localStorage
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      } catch (error) {
        throw error;
      }
    },
    [cartItems]
  );
  useEffect(() => {
    console.log("asd");
    addItemToCart(id, quantity);
  }, []);

  const handleAddToCart = useCallback((id: string, quantity: number) => {
    addItemToCart(id, quantity);
  }, []);

  const handleRemoveItem = useCallback((id: string) => {
    //todo
  }, []);

  const checkoutHandler = () => {
    //todo
  };

  return (
    <div className="row top">
      <div className="col-2">
        <h1>Shopping Cart</h1>
        {cartItems.length ? (
          <ul>
            {cartItems.map((item) => (
              <li key={item._id}>
                <div>
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
