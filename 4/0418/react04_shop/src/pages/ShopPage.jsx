import React, { useState } from 'react';
import css from './ShopPage.module.css';

const ShopPage = () => {
  const [isDown, setIsDown] = useState(false);
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
            <i className={`bi bi-chevron-down`}></i>
          </div>
          <ul>
            <li>등록순</li>
            <li>낮은 가격순</li>
            <li>높은 가격순</li>
            <li>낮은 할인순</li>
            <li>높은 할인순</li>
          </ul>
        </div>
      </div>
      <div className={css.productList}>
        <ul className={css.list}>
          <li>상품리스트</li>
        </ul>
      </div>
    </main>
  );
};

export default ShopPage;
