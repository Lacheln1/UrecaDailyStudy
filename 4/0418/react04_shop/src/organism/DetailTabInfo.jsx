import React from 'react'

const DetailTabInfo = () => {
  return (
    <>
      <div className={css.tabBtn}>
        <button>메뉴1</button>
        <button>메뉴2</button>
        <button>메뉴3</button>
      </div>
      <div className={css.tabContent}>
        <h3>제목</h3>
        <p>내용</p>
        <p>내용</p>
        <p>내용</p>
        <p>내용</p>
        <p>내용</p>
      </div>
    </>
  )
}

export default DetailTabInfo
