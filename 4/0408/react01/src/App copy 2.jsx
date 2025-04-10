import React, { useState } from 'react';

const App = () => {
  const [age, setAge] = useState(10);

  const increment = () => {
    // setAge(age + 1); // 기본값으로만 가지고 +1 하기 때문에 1만 올라가게 됨
    setAge((prev) => prev + 1); // 기존값을 가지고 하기 때문에 정상적으로 3이 올라감
  };
  return (
    <div>
      <h1>연습</h1>
      <button
        onClick={() => {
          increment();
          increment();
          increment();
        }}
      >
        +3
      </button>
      <button onClick={increment}>+1</button>
      <h2>입력값 : {age}</h2>
    </div>
  );
};

export default App;
