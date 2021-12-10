import { IProductEntry } from "../products/productsState";

export interface ICartEntry extends IProductEntry {
  quantity: number;
}

export interface ICartState {
  cartItems: ICartEntry[];
}
