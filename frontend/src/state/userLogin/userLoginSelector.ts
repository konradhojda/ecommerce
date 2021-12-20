import { useSelector } from "react-redux";
import { IAppState } from "../state";
import { IUserLoginState } from "./userLoginState";

export const useProductsList = () => {
  return useSelector<IAppState, IUserLoginState>((state) => state.userLogin);
};
