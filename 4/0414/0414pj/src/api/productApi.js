import axios from "axios";

export const getProductsData = async (query = "") => {
  try {
    const res = await axios.get(`/api/products/?${query}`);
    return res.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getProductById = async (id) => {
  try {
    const res = await axios.get(`/api/products//${id}`);
    return res.data;
  } catch (error) {
    console.log("error", error);
  }
};
