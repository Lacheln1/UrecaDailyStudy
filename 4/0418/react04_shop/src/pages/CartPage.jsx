import React from 'react';
import { useLoaderData } from 'react-router-dom';
import css from './CartPage.module.css';
const CartPage = () => {
  const cartList = useLoaderData();
  console.log('cartList------', cartList);
  return (
    <main>
      <h2>CartPage</h2>
      <p>you have 3 item</p>
      <ul className={css.cartList}>
        <li className={css.cartItem}>
          <div className={css.cartImg}>
            <img src="/public/img/image1.jpg" alt="cart" />
          </div>
          <div className={css.title}>상품명</div>
          <div className={css.price}>가격</div>
          <div className={css.btnArea}>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <div className={css.sum}>합계</div>
          <div className={css.deleteBtn}>
            <i className="bi bi-trash3"></i>
          </div>
        </li>
      </ul>
      <div className={css.totalPrice}>
        총금액 : <strong>100,000원</strong>
      </div>
    </main>
  );
};

export default CartPage;
