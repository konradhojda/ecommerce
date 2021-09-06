import { IProductsState, IProductState } from "./products/productsState";
import {
  IProductsEntry,
} from "./productDetails/productsDetailsState";

export interface IAppState {
  products: IProductsState;
  productsDetails: IProductState;
}
