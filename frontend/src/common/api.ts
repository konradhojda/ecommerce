import axios from "axios";

export async function getAllProducts() {
  const url = `/api/products`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getSingleProduct(id: string) {
  const url = `/api/products/${id}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error.response && error.response.data.message ? error.response.data.message : error.message
  }
}
