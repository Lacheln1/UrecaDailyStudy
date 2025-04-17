import React from "react";
import { useLoaderData } from "react-router-dom";
import css from "./DetailPage.module.css";

const DetailPage = () => {
  const { product, relatedProducts } = useLoaderData();
  console.log("DetailPage:product", product);
  console.log("DetailPage:relatedProducts", relatedProducts);

  return (
    <main>
      <h2>DetailPage</h2>
      <div className={css.detailCon}>
        <div className={css.imgWrap}>
          <img src="/public/img/image1.jpg" alt="상품명" />
        </div>
        <div className={css.infoWrap}>
          <p>상품명</p>
          <p>가격</p>
          <p>할인율</p>
        </div>
        <div className={css.btnWrap}>
          <div className={css.counterArea}>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <button className={css.addBtn}>장바구니 담기</button>
        </div>
      </div>
      <div>텝메뉴</div>
      <div>관련상품 들어가는 곳</div>
    </main>
  );
};

export default DetailPage;
