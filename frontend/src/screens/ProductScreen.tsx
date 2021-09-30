import React, { useEffect, useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import Rating from "../components/Rating";
import { useDispatch } from "react-redux";
import * as api from "../common/api";
import {
  PRODUCT_DETAIL_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
} from "../state/productDetails/productsDetailsActions";
import { useProductsDetails } from "../state/productDetails/productsDetailsSelector";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";
import { routeTo } from "../App";

const ProductScreen = (props: RouteComponentProps<{ id: string }>) => {
  const [quantity, setQuantity] = useState<number>(1);
  const { data: product, loading, error } = useProductsDetails();
  const dispatch = useDispatch();
  const id = props.match.params.id;

  const getProductDetails = async () => {
    dispatch(PRODUCT_DETAIL_REQUEST());
    try {
      const response = await api.getSingleProduct(id);
      dispatch(PRODUCT_DETAIL_SUCCESS(response));
    } catch (error) {
      console.log(error);
      dispatch(PRODUCT_DETAIL_FAIL(error));
    }
  };

  useEffect(() => {
    getProductDetails();
  }, [dispatch, id]);

  const addToCartHandler = () => {
    props.history.push(`${routeTo.cartScreen(id, quantity)}`);
  };

  if (!product) <div>Product not found</div>;

  return (
    <>
      <div>
        {!error && !loading && <Link to="/">Back to result</Link>}
        {loading && <LoadingBox />}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {product && !error && !loading && (
          <div className="row top">
            <div className="col-2">
              <img className="large" src={product.image} alt={product.name} />
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  />
                </li>
                <li>Price: ${product.price}</li>
                <li>
                  Description: <p>{product.description}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div>${product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        ${" "}
                        <span
                          className={
                            product.countInStock > 0 ? "success" : "error"
                          }
                        >
                          {`${
                            product.countInStock > 0
                              ? "In Stock"
                              : "Unavailable"
                          }`}
                        </span>
                      </div>
                    </div>
                  </li>
                  {product.countInStock > 0 && (
                    <>
                      <div className="row">
                        <div>Quantity</div>
                        <div>
                          <select
                            value={quantity}
                            onChange={(e) => setQuantity(+e.target.value)}
                          >
                            {
                              // @ts-ignore
                              [...Array(product.countInStock).keys()].map(
                                (e: number) => (
                                  <option key={e + 1} value={e + 1}>
                                    {e + 1}
                                  </option>
                                )
                              )
                            }
                          </select>
                        </div>
                      </div>
                      <li>
                        <button
                          className="primary block"
                          onClick={addToCartHandler}
                        >
                          Add to cart
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductScreen;
