import { useSelector } from "react-redux";
import { IProductState } from "../products/productsState";
import { IAppState } from "../state";

export const useProductsDetails = () => {
  return useSelector<IAppState, IProductState>(
    (state) => state.productsDetails
  );
};
