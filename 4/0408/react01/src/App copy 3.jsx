import React, { useState } from 'react';
import css from './sample.module.css';

const App = () => {
  const [userInfo, setUserInfo] = useState({
    userName: 'kim',
    artWork: {
      title: '이미지 제목',
      artist: 'Tabi',
      imgUrl: 'https://picsum.photos/200/300',
    },
  });

  const handleNameChange = (e) => {
    setUserInfo({
      ...userInfo, //수정할때 기본 정보를 유지해야 하기 때문에 스프레드 연산자를 사용하는것
      userName: e.target.value,
    });
  };

  const handleTitleChange = (e) => {
    setUserInfo({
      ...userInfo,
      artWork: {
        ...userInfo.artWork,
        title: e.target.value,
      },
    });
  };

  const handleArtistChange = (e) => {
    setUserInfo({
      ...userInfo,
      artWork: {
        ...userInfo.artWork,
        artist: e.target.value,
      },
    });
  };

  const handleImgUrlChange = (e) => {
    setUserInfo({
      ...userInfo,
      artWork: {
        ...userInfo.artWork,
        imgUrl: e.target.value,
      },
    });
  };
  return (
    <div className="app3">
      <h1>연습2</h1>
      <label htmlFor="userName">이름</label>
      <input type="text" id="userName" value={userInfo.userName} onChange={handleNameChange} />

      <label htmlFor="imgTitle">이미지 제목</label>
      <input
        type="text"
        id="imgTitle"
        value={userInfo.artWork.title}
        onChange={handleTitleChange}
      />

      <label htmlFor="artist">작가</label>
      <input
        type="text"
        id="artist"
        value={userInfo.artWork.artist}
        onChange={handleArtistChange}
      />

      <label htmlFor="imgUrl">이미지 정보</label>
      <input
        type="text"
        id="imgUrl"
        value={userInfo.artWork.imgUrl}
        onChange={handleImgUrlChange}
      />
      <div className={css.imgContainer}>
        <p>{userInfo.artWork.title}</p>
        <p>{userInfo.artWork.artist}</p>
        <img src={userInfo.artWork.imgUrl} alt={userInfo.artWork.title} />
      </div>
    </div>
  );
};

export default App;
