import React, { useEffect, useState } from 'react';
import css from './Modal.module.css';
import { formmatCurrency } from '@/utils/features';

const Modal = ({ product, count, onClose }) => {
  const [isActive, setIsActive] = useState(false);

  //컴포넌트가 마운트 된 직후 active 클래스 추가
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
      // 스크롤 생기는걸 막음
      document.body.style.overflow = 'hidden';
    }, 5);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleClose = () => {
    setIsActive(false);
    setTimeout(onClose, 300);
  };
  return (
    <div className={`${css.modal} ${isActive ? css.active : ''}`}>
      <div className={`${css.container} `}>
        <div className={css._inner}>
          <h2>장바구니</h2>
          <div className={css.imgWrap}>
            <img src={`/public/img/${product.img}`} alt={product.title} />
          </div>
          <div className={css.info}>
            <p>{formmatCurrency(product.price)}</p>
            {product.discount > 0 && <p>{product.discount}</p>}
            <p>{count}</p>
            <p>총 가격 : {formmatCurrency(product.price * count)}</p>
          </div>
          <button onClick={handleClose}>취소</button>
          <button>장바구니 담기</button>
        </div>
        <button className={css.btnClose} onClick={handleClose}>
          <i className="bi bi-x-lg"></i>
        </button>
      </div>
    </div>
  );
};

export default Modal;
