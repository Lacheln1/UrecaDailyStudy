import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const getProductsData = async (query = "") => {
    try {
        const res = await axios.get(`${BASE_URL}/products/?${query}`);
        return res.data;
    } catch (error) {
        console.log("상품 데이터 가져오기 실패", error);
    }
};
