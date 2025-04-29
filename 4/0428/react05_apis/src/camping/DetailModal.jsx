import React from "react";
import css from "./DetailModal.module.css";
const DetailModal = () => {
  return (
    <div className={css.modal}>
      <div className={css.modalContent}>
        <h2>상세정보</h2>
        <p>상세정보내용</p>
        <p>상세정보내용</p>
        <p>상세정보내용</p>
        <p>상세정보내용</p>
        <button>닫기</button>
      </div>
    </div>
  );
};

export default DetailModal;
