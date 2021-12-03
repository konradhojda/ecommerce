import { IProductsEntry } from "../products/productsState";

export interface ICartEntry extends IProductsEntry {
  quantity: number;
}

export interface ICartState {
  cartItems: ICartEntry[];
}
