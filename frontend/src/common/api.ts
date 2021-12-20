import axios, { AxiosResponse } from "axios";
import * as ApiModel from "./ApiModel";
import { IProductEntry } from "../state/products/productsState";

export async function getAllProducts() {
  const url = `/api/products`;
  try {
    const response: AxiosResponse = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getSingleProduct(
  id: string
): Promise<ApiModel.IGetSingleProductResponse> {
  const url = `/api/products/${id}`;

  try {
    const response: AxiosResponse =
      await axios.get<ApiModel.IGetSingleProductResponse>(url);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw error.response.data.message;
    }
    throw error.message;
  }
}

export async function addItem(data: Omit<IProductEntry, "_id">) {
  const url = `/api/admin/additem`;
  try {
    const response = await axios.post(url, data);
    return response;
  } catch (e) {}
}
