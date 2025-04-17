import axios from "axios";
const BASE_URL = "http://localhost:3000/banners/";

export const getBannerData = async () => {
  try {
    const res = await axios.get(`${BASE_URL}`);
    return res.data;
  } catch (error) {
    console.log("error", error);
  }
};
