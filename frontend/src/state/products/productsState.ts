export interface IProductEntry {
  _id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  countInStock: number;
  brand: string;
  rating: number;
  numReviews: number;
  description: string;
}

export interface IProductsState {
  data: IProductEntry[];
  loading?: boolean;
  error?: string;
}

export interface IProductState {
  data: IProductEntry;
  loading?: boolean;
  error?: string;
}
