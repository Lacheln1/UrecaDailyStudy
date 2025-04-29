import axios from "axios";

const CAMPING_API = import.meta.env.VITE_CAMPING_API_KEY;

const CAMPING_BASE_URL =
  "https://api.odcloud.kr/api/15037499/v1/uddi:adf7c061-042d-4965-9b7c-87585251862b";

export const getCampingData = async (page = 1, perPage = 10) => {
  try {
    const res = await axios.get(
      `${CAMPING_BASE_URL}?page=${page}&perPage=${perPage}&serviceKey=${CAMPING_API}`
    );
    console.log("getCampingApi에서 호출함", res);
    return res.data;
  } catch (error) {
    console.log("캠핑 받아오기 실패", error);
  }
};
