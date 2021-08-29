export interface IProductsEntry {
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
  data: IProductsEntry[];
  loading: boolean;
  error?: string;
}
