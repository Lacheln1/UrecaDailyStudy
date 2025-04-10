import React, { useState } from 'react';
import Header from './components/Header';
import InputField from './components/InputField';
import PostList from './components/PostList';
import NoList from './components/NoList';

const App = () => {
  // const list = ['송도', '인천', '경기', '서울'];
  const list = JSON.parse(localStorage.getItem('trip')) || []; // trip이 없으면 빈배열을 넣어라
  const [data, setData] = useState(list);
  const changeText = () => {
    setData((prev) => [...prev, 'test']);
  };
  return (
    <div>
      <button onClick={changeText}>내용변경</button>
      <Header />
      <InputField setData={setData} />
      <PostList data={data} setData={setData} />
    </div>
  );
};

export default App;
