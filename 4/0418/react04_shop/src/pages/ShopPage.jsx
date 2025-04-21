import React from 'react';

const ShopPage = () => {
  return (
    <main>
      <h2>ShopPage</h2>
      <div>
        {/* 카테고리 선택 기능 new,top,기본  */}
        <div>
          <button>전체상품</button>
          <button>신상품(new)</button>
          <button>인기상품(top)</button>
        </div>
        {/* {정렬기능} */}
        <div>
          <div>등록순</div>
          <ul>
            <li>등록순</li>
            <li>낮은 가격순</li>
            <li>높은 가격순</li>
            <li>낮은 할인순</li>
            <li>높은 할인순</li>
          </ul>
        </div>
      </div>
      <div>
        <ul>
          <li>상품리스트</li>
        </ul>
      </div>
    </main>
  );
};

export default ShopPage;
