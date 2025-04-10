import React, { use, useState } from 'react';

const App = () => {
  const [info, setInfo] = useState({
    title: '忘れてやらない',
    artist: 'kessoku band',
    engTitle: 'Never forget',
  });

  const [inputText, setInputText] = useState('');

  const ChangeTitle = () => {
    setInfo((prev) => ({
      ...prev,
      title: inputText,
    }));
  };
  return (
    <div>
      <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button onClick={ChangeTitle}>제목 수정하기</button>
      <p>곡 이름 : {info.title}</p>
      <p>아티스트 : {info.artist}</p>
      <p>영어 : {info.engTitle}</p>
    </div>
  );
};

export default App;
