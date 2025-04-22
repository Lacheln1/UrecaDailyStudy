import React, { useState } from 'react';
import css from './ShopPage.module.css';
import { useLoaderData, useNavigate, useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import Pagination from '@/components/Pagination';

const ShopPage = () => {
  const initProductsData = useLoaderData();
  console.log('ShopPage.js:initProductsData', initProductsData);
  const data = initProductsData.products.data;
  console.log('ShopPage.js:data-----', data);

  const { per_page } = initProductsData;

  console.log('ShopPage.js:data', data);
  console.log('ShopPage.js:per_page', per_page);

  const [isDown, setIsDown] = useState(false);

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  // console.log('ShopPage.js:info ------', searchParams)

  const cuurentCategory = searchParams.get('category');

  const handleCategoryFilter = category => {
    const params = new URLSearchParams(searchParams); // 현재 파라미터 정보 유지
    params.set('_page', 1); // 페이지를 1로 초기화
    params.set('_per_page', per_page); // 페이지당 상품 수를 설정
    category ? params.set('category', category) : params.delete('category'); // 카테고리 필터링

    console.log('ShopPage.js:params -----', params);
    navigate(`/shop/?${params}`); // URL 변경
  };

  const handleSort = sortOption => {
    const params = new URLSearchParams(searchParams);
    params.set('_page', 1);
    params.set('_sort', sortOption);
    setIsDown(false);
    navigate(`/shop/?${params}`);
  };

  const sortCase = searchParams.get('_sort');
  const sortTextMap = {
    id: '등록순',
    price: '낮은 가격순',
    '-price': '높은 가격순',
    discount: '낮은 할인순',
    '-discount': '높은 할인순',
  };
  const getSortText = () => {
    return sortTextMap[sortCase] || '등록순';
  };

  return (
    <main className={css.shopPage}>
      {/* 카테고리 선택 기능 new,top,기본  */}
      <h2>Shop All</h2>
      <div className={css.searchFn}>
        <div className={css.category}>
          <button
            onClick={() => {
              handleCategoryFilter('');
            }}
            className={cuurentCategory === null ? css.active : ''}
          >
            전체상품
          </button>
          <button
            onClick={() => {
              handleCategoryFilter('new');
            }}
            className={cuurentCategory === 'new' ? css.active : ''}
          >
            신상품(new)
          </button>
          <button
            onClick={() => {
              handleCategoryFilter('top');
            }}
            className={cuurentCategory === 'top' ? css.active : ''}
          >
            인기상품(top)
          </button>
        </div>
        {/* {정렬기능} */}
        <div className={`${css.sort} ${isDown ? css.active : ''}`}>
          <div className={css.sortHeader} onClick={() => setIsDown(!isDown)}>
            {/* 레이아웃 상황에 따라 화살표가 up/down 되는것을 구현 예정 */}
            <p>{getSortText()}</p>
            <i className={`bi bi-chevron-${isDown ? 'up' : 'down'}`}></i>
          </div>
          <ul>
            <li
              onClick={() => {
                handleSort('id');
              }}
              className={sortCase === 'id' ? css.active : ''}
            >
              등록순
            </li>
            <li
              onClick={() => {
                handleSort('price');
              }}
              className={sortCase === 'price' ? css.active : ''}
            >
              낮은 가격순
            </li>
            <li
              onClick={() => {
                handleSort('-price');
              }}
              className={sortCase === '-price' ? css.active : ''}
            >
              높은 가격순
            </li>
            <li
              onClick={() => {
                handleSort('discount');
              }}
              className={sortCase === 'discount' ? css.active : ''}
            >
              낮은 할인순
            </li>
            <li
              onClick={() => {
                handleSort('-discount');
              }}
              className={sortCase === '-discount' ? css.active : ''}
            >
              높은 할인순
            </li>
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
