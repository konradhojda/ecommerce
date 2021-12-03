import { IProductsEntry } from "../products/productsState";

interface ICartEntry extends IProductsEntry {
  quantity?: string;
}

export interface ICartState {
  cartItems: ICartEntry[];
}
