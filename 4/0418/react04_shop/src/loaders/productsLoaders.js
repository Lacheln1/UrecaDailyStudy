import { getProductById, getProductsByCategory, getProductsData } from '@/api/productsApi';

// 지연 함수 추가
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const detailPageLoader = async info => {
  console.log('productsLoaders.js:info', info);
  const params = info.params;
  try {
    //지연 추가
    await delay(10);

    // 상품 ID에 해당하는 정보
    const product = await getProductById(params.productId);
    console.log('productsLoaders.js:product', product.category);

    if (!product) {
      throw new Response('상품이 존재하지 않습니다.', {
        status: 404,
      });
    }

    // 상품 ID의 카테고리 정보와 일치하는 상품들
    const relatedProducts = await getProductsByCategory(product.category, 10);

    return { product, relatedProducts };
  } catch (err) {
    console.log('err----', err);
    throw new Response('상품 데이터를 가져오는 중 오류 발생', {
      status: err.status || 500,
    });
  }
};

export const shopPageLoader = async info => {
  console.log('productLoader====', info);

  //_page=2&_per_page=2    :  데이터를 다 가져오지 않고 필요한 데이터만을 가져오기 위한 작업

  const page = 1;
  const per_page = 12;
  let queryString = `_page=${page}&_per_page=${per_page}`;

  const products = await getProductsData(queryString);
  return products;
};
