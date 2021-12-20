import { ICartState } from "./cart/cartState";
import { IProductsState, IProductState } from "./products/productsState";
import { IUserLoginState } from "./userLogin/userLoginState";

export interface IAppState {
  products: IProductsState;
  productsDetails: IProductState;
  cart: ICartState;
  userLogin: IUserLoginState;
}
