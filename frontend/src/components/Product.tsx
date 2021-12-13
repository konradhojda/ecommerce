import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { IProductEntry } from "../state/products/productsState";

interface IProps {
  product: IProductEntry;
}

const Product = (props: IProps) => {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <Link to={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <a href={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </a>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <div className="price">${product.price}</div>
      </div>
    </div>
  );
};

export default Product;
