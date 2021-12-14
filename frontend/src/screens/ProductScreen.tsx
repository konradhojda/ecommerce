import React, { useCallback, useEffect, useMemo, useState } from "react";
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
import { PRODUCT_LIST_SUCCESS } from "../state/products/productsActions";
import { usePrevious } from "react-use";
import { useProductsList } from "../state/products/productsSelector";
import { IProductEntry } from "../state/products/productsState";
import PageFallback from "../components/PageFallback/PageFallback";

const ProductScreen = (props: RouteComponentProps<{ id: string }>) => {
  const [quantity, setQuantity] = useState<number>(1);
  const { data: product, error, loading } = useProductsList();
  const { data: product2 } = useProductsDetails();
  const dispatch = useDispatch();
  const id = props.match.params.id;

  const myData = product.find((x: IProductEntry) => x._id === id);

  const getProductDetails = useCallback(async () => {
    dispatch(PRODUCT_DETAIL_REQUEST());
    try {
      const response = await api.getSingleProduct(id);
      dispatch(PRODUCT_DETAIL_SUCCESS(response));
    } catch (error) {
      console.log(error);
      dispatch(PRODUCT_DETAIL_FAIL(error));
    }
  }, []);

  useEffect(() => {
    getProductDetails();
  }, []);

  const addToCartHandler = () => {
    props.history.push(`${routeTo.cartScreen(id, quantity)}`);
  };

  if (!product) <div>Product not found</div>;

  return (
    <>
      <div>
        {/*{!error && !loading && <Link to="/">Back to result</Link>}*/}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {myData && !loading && (
          <div className="row top">
            <div className="col-2">
              <img className="large" src={myData.image} alt={myData.name} />
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{myData.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={myData.rating}
                    numReviews={myData.numReviews}
                  />
                </li>
                <li>Price: ${myData.price}</li>
                <li>
                  Description: <p>{myData.description}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div>${myData.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        ${" "}
                        <span
                          className={
                            myData.countInStock > 0 ? "success" : "error"
                          }
                        >
                          {`${
                            myData.countInStock > 0 ? "In Stock" : "Unavailable"
                          }`}
                        </span>
                      </div>
                    </div>
                  </li>
                  {myData.countInStock > 0 && (
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
        {/*{loading && <LoadingBox />}*/}
      </div>
    </>
  );
};

export default ProductScreen;
