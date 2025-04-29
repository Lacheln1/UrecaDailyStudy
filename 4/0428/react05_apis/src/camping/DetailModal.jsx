import React, { useEffect, useState } from "react";
import css from "./DetailModal.module.css";
import CampingPage from "./CampingPage";
const DetailModal = ({ selected }) => {
  const [isModalClose, setIsModalClose] = useState(false);
  const closeModal = () => {
    setIsModalClose(true);
  };

  useEffect(() => {
    const fetchModalState = () => {
      setIsModalClose(false);
    };
    fetchModalState();
  }, [selected]);

  if (isModalClose) return null;

  return (
    <>
      <div className={css.modal}>
        <div className={css.modalContent}>
          <h2>상세정보</h2>
          <p>{selected["야영장명"]}</p>
          <p>{selected["시군구"]}</p>
          <p>{selected["주소"]}</p>
          <p>{selected["인허가일자"]}</p>
          <button onClick={closeModal}>닫기</button>
        </div>
      </div>
    </>
  );
};

export default DetailModal;
