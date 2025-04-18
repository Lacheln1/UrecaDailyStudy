import React, { useState } from 'react';
import css from './DetailTabInfo.module.css';

const DetailTabInfo = () => {
  // n번째 탭을 useState로 관리
  const [activeTab, setActive] = useState(0);
  const tabTiles = ['메뉴1', '메뉴2', '메뉴3'];

  return (
    <>
      <div className={css.tabBtn}>
        {tabTiles.map((title, i) => (
          <button
            key={i}
            className={activeTab === i ? css.active : ''}
            onClick={() => {
              setActive(i);
            }}
          >
            {title}
          </button>
        ))}
      </div>
      <div className={`${css.tabContent} ${activeTab == 0 ? css.active : ''}`}>
        <h3>제목1</h3>
        <p>내용</p>
        <p>내용</p>
        <p>내용</p>
        <p>내용</p>
        <p>내용</p>
      </div>
      <div className={`${css.tabContent} ${activeTab == 1 ? css.active : ''}`}>
        <h3>제목2</h3>
        <p>내용</p>
        <p>내용</p>
        <p>내용</p>
        <p>내용</p>
        <p>내용</p>
      </div>
      <div className={`${css.tabContent} ${activeTab == 2 ? css.active : ''}`}>
        <h3>제목3</h3>
        <p>내용</p>
        <p>내용</p>
        <p>내용</p>
        <p>내용</p>
        <p>내용</p>
      </div>
    </>
  );
};

export default DetailTabInfo;
