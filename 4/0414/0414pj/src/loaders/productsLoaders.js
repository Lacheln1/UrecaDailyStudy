import { getProductById } from "@/api/productApi";

export const detailPageLoader = async ({ info }) => {
  console.log("router.jsx:info", info);
  const params = info.params;
  try {
    const product = await getProductById(params.productId);
    if (!product) {
      throw new Response("상품이 존재하지 않음", {
        status: 404,
      });
    }
    return product; // return한 product는 detailpage컴포넌트에 값이 간다
  } catch (error) {
    console.log("err", error);
    throw new Response("상품 데이터를 가져오는 중 오류 발생", {
      status: error.status || 500,
    });
  }
};
