import React, { useEffect } from "react";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch } from "react-redux";
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../state/products/productsActions";
import * as api from "../common/api";
import { useProductsList } from "../state/products/productsSelector";
import { IProductEntry } from "../state/products/productsState";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useProductsList();

  const fetchFiles = async () => {
    dispatch(PRODUCT_LIST_REQUEST());
    try {
      const response = await api.getAllProducts();
      dispatch(PRODUCT_LIST_SUCCESS(response));
    } catch (error) {
      dispatch(PRODUCT_LIST_FAIL(error.message));
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);
  return (
    <div>
      {loading && <LoadingBox />}
      {error && <MessageBox variant="danger">{error}</MessageBox>}
      <div className="row center">
        {data &&
          data.map((product: IProductEntry) => {
            return <Product key={product._id} product={product} />;
          })}
      </div>
    </div>
  );
};

export default HomeScreen;
