import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import Rating from "../components/Rating";
import {useSelector} from "react-redux";

const ProductScreen = (props: RouteComponentProps<{ id: string }>) => {
  const productsList = useSelector((state: any) => state.products);
  const { data } = productsList;
  const product = data.find((x: any) => x._id === props.match.params.id);
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Link to="/">Back to result</Link>
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
              <Rating rating={product.rating} numReviews={product.numReviews} />
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
                      className={product.countInStock > 0 ? "success" : "error"}
                    >
                      {`${
                        product.countInStock > 0 ? "In Stock" : "Unavailable"
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
    </div>
  );
};

export default ProductScreen;
