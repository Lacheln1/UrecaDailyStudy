import Counter from '@/components/Counter';
import React from 'react';
import { increment, decrement } from '@/store/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

const BlogPage = () => {
  const dispatch = useDispatch();
  const increase = () => {
    //함수를 실행하려면 dipatch로 감싸줘야함 이건 규칙임.
    dispatch(increment());
  };
  const decrease = () => {
    dispatch(decrement());
  };
  return (
    <main>
      <h2>BlogPage</h2>
      <Counter />
      <Counter />
      <Counter />
      <button onClick={increase}>증가하기</button>
      <button onClick={decrease}>감소하기</button>
    </main>
  );
};

export default BlogPage;
