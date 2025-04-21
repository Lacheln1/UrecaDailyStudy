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
        <li>
          <div>
            <img src="/public/img/image1.jpg" alt="cart" />
          </div>
          <div>상품명</div>
          <div>가격</div>
          <div>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <div>합계</div>
          <div>
            <i className="bi bi-trash3"></i>
          </div>
          <div>
            <button>삭제</button>
          </div>
        </li>
      </ul>
      <div>
        총금액 : <strong>100,000원</strong>
      </div>
    </main>
  );
};

export default CartPage;
