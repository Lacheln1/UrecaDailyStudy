import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import css from './CartPage.module.css';
import { formmatCurrency } from '@/utils/features';
const CartPage = () => {
  const cartList = useLoaderData();
  const [items, setItems] = useState(cartList);

  console.log('cartList------', items);

  //장바구니 총 수량 계산 reduce 고차함수
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  //총 계산 할 금액
  const totalSum = items.reduce(
    (sum, item) => sum + Math.round(item.price * item.count * (1 - item.discount / 100)),
    0
  );

  const increase = id => {
    // 해당 아이템만 수량이 늘어나야한다
    setItems(prev =>
      prev.map(item => (item.id === id ? { ...item, count: item.count + 1 } : item))
    );

    const newCount = items.find();
  };

  const decrease = id => {
    setItems(prev =>
      prev.map(item =>
        item.id === id && item.count > 1 ? { ...item, count: item.count - 1 } : item
      )
    );
  };
  return (
    <main>
      <h2>CartPage</h2>
      <p>
        장바구니에 <strong>{items.length}</strong>개가 담겨있으며, 총 상품 갯수는{' '}
        <strong>{totalCount}</strong>개 입니다
      </p>
      <ul className={css.cartList}>
        {items.map(item => (
          <li className={css.cartItem} key={item.id}>
            <div className={css.cartImg}>
              <img src={`/public/img/${item.img}`} alt={item.title} />
            </div>
            <div className={css.title}>{item.title}</div>
            <div className={css.price}>{formmatCurrency(item.price)}</div>
            <div className={css.btnArea}>
              <button onClick={() => decrease(item.id)}>-</button>
              <span>{item.count}</span>
              {/* 파라미터를 보내기때문에 실행문이어서 실행문일땐 콜백으로 넘겨줘야함 */}
              <button onClick={() => increase(item.id)}>+</button>
            </div>
            <div className={css.sum}>{formmatCurrency(item.price * item.count)}</div>
            <div className={css.deleteBtn}>
              <i className="bi bi-trash3"></i>
            </div>
          </li>
        ))}
      </ul>
      <div className={css.totalPrice}>
        총금액 : <strong>{formmatCurrency(totalSum)}</strong>
      </div>
    </main>
  );
};

export default CartPage;
