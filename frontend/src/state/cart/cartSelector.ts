import { useSelector } from "react-redux";
import { IAppState } from "../state";
import { ICartState } from "./cartState";

export const useProductCart = () => {
  return useSelector<IAppState, ICartState>((state) => state.cart);
};
