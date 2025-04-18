import React, { useEffect, useState } from 'react';
import css from './Modal.module.css';

const Modal = ({ product, count, onClose }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
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
            <p>{product.price}</p>
            <p>{product.discount}</p>
            <p>{count}</p>
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
