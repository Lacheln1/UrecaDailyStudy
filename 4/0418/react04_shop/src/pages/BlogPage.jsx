import Counter from '@/components/Counter';
import React from 'react';
import { increment } from '@/store/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

const BlogPage = () => {
  const dispatch = useDispatch();
  const increase = () => {
    dispatch(increment());
  };
  return (
    <main>
      <h2>BlogPage</h2>
      <Counter />
      <Counter />
      <Counter />
      <button onClick={increase}>증가하기</button>
    </main>
  );
};

export default BlogPage;
