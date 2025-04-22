import React, { useState } from 'react';
import css from './ShopPage.module.css';
import { data, useLoaderData, useNavigate, useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import Pagination from '@/components/Pagination';

const ShopPage = () => {
  const initProductsData = useLoaderData();
  const data = initProductsData.data;

  const [isDown, setIsDown] = useState(false);

  const per_page = initProductsData.per_page;
  console.log('per_page===', per_page);

  const navigate = useNavigate();

  //배열로 정보 제공
  const [searchParams] = useSearchParams();

  const handleCategoryFilter = category => {
    const params = new URLSearchParams(searchParams); //현재 파라미터 정보 유지를 위해 넣음
    params.set('_page', 1); // 카테고리를 옮겼을 때 페이지를 1로 초기화
    params.set('_per_page', per_page); //페이지당 상품 수를 설정
    category ? params.set('category', category) : params.delete('category'); // 카테고리
    navigate(`/shop/${params}`);
  };
  return (
    <main className={css.shopPage}>
      <h2>ShopPage</h2>

      {/* 카테고리 선택 기능 new,top,기본  */}
      <div className={css.searchFn}>
        <div className={css.category}>
          <button className={css.active}>전체상품</button>
          <button>신상품(new)</button>
          <button>인기상품(top)</button>
        </div>
        {/* {정렬기능} */}
        <div className={`${css.sort} ${isDown ? css.active : ''}`}>
          <div className={css.sortHeader} onClick={() => setIsDown(!isDown)}>
            <p>등록순</p>
            {/* 레이아웃 상황에 따라 화살표가 up/down 되는것을 구현 예정 */}
            <i className={`bi bi-chevron-${isDown ? 'up' : 'down'}`}></i>
          </div>
          <ul>
            <li>등록순</li>
            <li className={css.active}>낮은 가격순</li>
            <li>높은 가격순</li>
            <li>낮은 할인순</li>
            <li>높은 할인순</li>
          </ul>
        </div>
      </div>
      <div className={css.productList}>
        <ul className={css.list}>
          {data.map(product => (
            <ProductCard key={product.id} data={product} />
          ))}
        </ul>
        <Pagination initProductsData={initProductsData} />
      </div>
    </main>
  );
};

export default ShopPage;
