import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
  //counter 은 slice이름임
  const countData = useSelector(state => state.counter);
  const { count, label } = countData;
  console.log('countdata는====', countData);
  return (
    <p>
      {label} : {count}
    </p>
  );
};

export default Counter;
