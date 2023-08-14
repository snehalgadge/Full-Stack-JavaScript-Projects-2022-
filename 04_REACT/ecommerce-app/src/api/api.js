import axios from 'axios';

export async function productsData() {
  const products = await axios.get(process.env.REACT_APP_BACKEND_URL);
  return products;
}
