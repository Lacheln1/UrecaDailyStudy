import React, { useState } from 'react';
import css from './ShopPage.module.css';
import { useLoaderData, useNavigate, useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import Pagination from '@/components/Pagination';
import CategoryButton from '@/components/CategoryButton';
import SortItem from '@/components/SortItem';

const ShopPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isDown, setIsDown] = useState(false);
  const initProductsData = useLoaderData();
  const currentCategory = searchParams.get('category');
  const sortCase = searchParams.get('_sort');

  const data = initProductsData.products.data;
  const { per_page } = initProductsData;

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

  const sortOptions = [
    { option: 'id', label: '등록순' },
    { option: 'price', label: '낮은 가격순' },
    { option: '-price', label: '높은 가격순' },
    { option: 'discount', label: '낮은 할인순' },
    { option: '-discount', label: '높은 할인순' },
  ];
  const categories = [
    { id: '', label: '전체상품' },
    { id: 'new', label: '신상품(new)' },
    { id: 'top', label: '인기상품(top)' },
  ];

  return (
    <main className={css.shopPage}>
      {/* 카테고리 선택 기능 new,top,기본  */}
      <h2>Shop All</h2>
      <div className={css.searchFn}>
        <div className={css.category}>
          {categories.map(cate => (
            <CategoryButton
              key={cate.id}
              cate={cate.id}
              handleCategoryFilter={handleCategoryFilter}
              currentCategory={currentCategory === null && cate.id === '' ? null : currentCategory}
              label={cate.label}
            />
          ))}
        </div>
        {/* {정렬기능} */}
        <div className={`${css.sort} ${isDown ? css.active : ''}`}>
          <div className={css.sortHeader} onClick={() => setIsDown(!isDown)}>
            {/* 레이아웃 상황에 따라 화살표가 up/down 되는것을 구현 예정 */}
            <p>{getSortText()}</p>
            <i className={`bi bi-chevron-${isDown ? 'up' : 'down'}`}></i>
          </div>
          <ul>
            {sortOptions.map(sortOpt => (
              <SortItem
                key={sortOpt.option}
                option={sortOpt.option}
                handleSort={handleSort}
                currentSort={sortCase}
                label={sortOpt.label}
              />
            ))}
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
