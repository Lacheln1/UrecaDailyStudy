import Counter from '@/components/Counter';
import React from 'react';
import { increment, decrement, countReset } from '@/store/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

const BlogPage = () => {
  const dispatch = useDispatch();
  const increase = num => {
    //함수를 실행하려면 dipatch로 감싸줘야함 이건 규칙임.
    dispatch(increment(num));
  };
  const decrease = () => {
    dispatch(decrement());
  };

  const restart = () => {
    dispatch(countReset());
  };
  return (
    <main>
      <h2>BlogPage</h2>
      <Counter />
      <Counter />
      <Counter />
      <button onClick={() => increase()}>증가하기</button>
      <button onClick={() => increase(10)}>10씩 증가하기</button>
      <button onClick={decrease}>감소하기</button>
      <button onClick={restart}>초기화</button>
    </main>
  );
};

export default BlogPage;
