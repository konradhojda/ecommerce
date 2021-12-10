import { ICartState } from "./cart/cartState";
import { IProductsState, IProductState } from "./products/productsState";
import { IProductEntry } from "./products/productsState";

export interface IAppState {
  products: IProductsState;
  productsDetails: IProductState;
  cart: ICartState;
}
