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
          <button key={i} className={css.active} onClick={() => setActive(i)}>
            {title}
          </button>
        ))}
        <button className={css.active}>메뉴1</button>
        <button>메뉴2</button>
        <button>메뉴3</button>
      </div>
      <div className={css.tabContent}>
        <h3>제목1</h3>
        <p>내용</p>
        <p>내용</p>
        <p>내용</p>
        <p>내용</p>
        <p>내용</p>
      </div>

      <div className={css.tabContent}>
        <h3>제목2</h3>
        <p>내용</p>
        <p>내용</p>
        <p>내용</p>
        <p>내용</p>
        <p>내용</p>
      </div>

      <div className={css.tabContent}>
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
