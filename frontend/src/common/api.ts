import axios from "axios";

export async function getData() {
  const url = `/api/products`
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}
