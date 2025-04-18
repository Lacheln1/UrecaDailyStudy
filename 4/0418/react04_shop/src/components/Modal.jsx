import React from 'react';
import css from './Modal.module.css';

const Modal = ({ product, count }) => {
  return (
    <div className={`${css.modal}`}>
      <div className={`${css.container} ${css.active}`}>
        <div className={css._inner}>
          컨텐츠가 들어가는 곳<h2>장바구니</h2>
          <div className={css.imgWrap}>
            <img src={`/public/img${product.img}`} alt={product.title} />
          </div>
          <div className={css.info}>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.discount}</p>
            <p>{count}</p>
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
