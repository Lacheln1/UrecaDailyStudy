import { getProductsData } from "../api/productsApi";

export const shopPageLoader = async ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get("_page") || 1;
    const per_page = url.searchParams.get("_per_page") || 3;
    const category = url.searchParams.get("category") || "";
    const sort = url.searchParams.get("_sort") || "";

    let queryString = `_page=${page}&_per_page=${per_page}`;
    category ? (queryString += `&category=${category}`) : queryString;
    sort ? (queryString += `&_sort=${sort}`) : queryString;

    try {
        const products = await getProductsData(queryString);
        return { products, per_page };
    } catch (error) {
        console.log("err----", error);
        throw new Response("상품 데이터를 가져오는 중 오류 발생", {
            status: error.status || 500,
        });
    }
};
