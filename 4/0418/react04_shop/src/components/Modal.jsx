import React from 'react';
import css from './Modal.module.css';

const Modal = () => {
  return (
    <div className={`${css.modal}`}>
      <div className={`${css.container} ${css.active}`}>
        <div className={css._inner}>
          컨텐츠가 들어가는 곳<h2>장바구니</h2>
          <div className={css.imgWrap}>
            <img src="/public/img/image1.jpg" alt="" />
          </div>
          <div className={css.info}>
            <p>상품명</p>
            <p>가격</p>
            <p>할인률</p>
            <p>수량</p>
          </div>
          <button>취소</button>
          <button>장바구니 담기</button>
        </div>
        <button className={css.btnClose}>
          <i className="bi bi-x-lg"></i>
        </button>
      </div>
    </div>
  );
};

export default Modal;
