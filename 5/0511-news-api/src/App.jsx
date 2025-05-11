import React from "react";

const App = () => {
  const increase = (number) => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = number + 10;
        if (result > 50) {
          //50보다 높으면 에러 발생
          const e = new Error("numberTooBig");
          return reject(e);
        }
        resolve(result); // number값에 +10 후 성공 처리
      }, 1000);
    });
    return promise;
  };

  increase(0)
    .then((number) => {
      //Promise에서 resolve된 값은 .then을 통해 받아 올 수 있음
      console.log(number);
      return increase(number);
    })
    .then((number) => {
      console.log(number);
      return increase(number);
    })
    .then((number) => {
      console.log(number);
      return increase(number);
    })
    .then((number) => {
      console.log(number);
      return increase(number);
    })
    .catch((e) => {
      console.log(e);
    });

  return <div></div>;
};

export default App;
