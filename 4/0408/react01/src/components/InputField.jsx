import React, { useState } from 'react';

const InputField = ({ setData }) => {
  const [inputText, setInputText] = useState('');
  const inputItem = (e) => {
    setInputText(e.target.value);
  };
  const addItem = () => {
    // if (inputText.trim() === '') {
    //   alert('여행지를 입력하세요')
    //   document.querySelector('input').focus()
    //   return
    // } else if (inputText.trim().length < 2) {
    //   alert('2자 이상으로 입력하세요')
    //   document.querySelector('input').focus()
    //   return
    // }
    if (inputText.trim().length < 2) {
      alert(inputText.trim() === '' ? '여행지를 입력하세요' : '2자 이상으로 입력하세요');
      document.querySelector('input').focus();
      return;
    }

    //로컬 스토리지 저장하기
    // localStorage.setItem('trip', JSON.stringify());

    setData((prev) => {
      const newData = [...prev, inputText];
      localStorage.setItem('trip', JSON.stringify(newData));
      return newData;
    });
    // 앞에다 추가할거면 prev와 inputText순서 바꿔주면됨
    setInputText('');
    document.querySelector('input').focus();
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      addItem();
    }
  };

  return (
    <div className="inputField mw">
      {/* <label htmlFor="field">여행지 입력</label> */}
      {/* input value = 데이터가 전송되는값 */}
      <input
        type="text"
        placeholder="여행지를 입력하세요"
        id="field"
        value={inputText}
        onChange={inputItem}
        onKeyUp={handleKeyUp}
      />
      <button onClick={addItem}>입력</button>
    </div>
  );
};

export default InputField;
