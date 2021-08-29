import { useSelector } from "react-redux";
import { IAppState } from "../state";
import { IProductsState } from "./productsState";

export const useProductsList = () => {
  return useSelector<IAppState, IProductsState>((state) => state.products);
};
