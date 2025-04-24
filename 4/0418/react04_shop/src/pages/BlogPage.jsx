import Counter from '@/components/Counter';
import React from 'react';
import { useSelector } from 'react-redux';

const BlogPage = () => {
  return (
    <main>
      <h2>BlogPage</h2>
      <Counter />
      <Counter />
      <Counter />
      <button>증가하기</button>
    </main>
  );
};

export default BlogPage;
