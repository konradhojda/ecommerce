import React, { useCallback, useEffect } from "react";
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

const ProductScreen = (props: RouteComponentProps<{ id: string }>) => {
  const { data: product, loading, error } = useProductsDetails();
  const dispatch = useDispatch();
  const id = props.match.params.id;

  const getProductDetails = useCallback(async () => {
    dispatch(PRODUCT_DETAIL_REQUEST());
    try {
      const response = await api.getSingleProduct(id);
      dispatch(PRODUCT_DETAIL_SUCCESS(response));
    } catch (error) {
      console.log(error);
      dispatch(PRODUCT_DETAIL_FAIL(error));
    }
  }, [dispatch, id]);

  useEffect(() => {
    getProductDetails();
  }, [dispatch, id]);

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
                  <li>
                    <button className="primary block">Add to cart</button>
                  </li>
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
