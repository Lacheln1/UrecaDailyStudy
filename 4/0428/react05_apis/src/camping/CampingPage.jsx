import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useCamping } from "./useCamping";
import css from "./CampingPage.module.css";
import DetailModal from "./DetailModal";
import Pagination from "./Pagination";

const CampingPage = () => {
  const [searchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  //선택된 캠핑 정보들을 모달에다가 전달해주기 위함
  const [selected, setSelected] = useState(null);

  const currentPage = Number(searchParams.get("_page") || "1");

  const { data, isError, isLoading } = useCamping(currentPage, 10);
  const campingData = data?.data; // 실제 캠핑 배열
  const totalCount = data?.totalCount;
  const page = data?.page;
  const perPage = data?.perPage;

  const handleCampingClick = (list) => {
    setIsModalOpen(true);
    setSelected(list);
  };

  return (
    <main>
      <h2>캠핑페이지</h2>
      <div>
        <p>
          총 {totalCount}개 중 {campingData?.length || 0}개 표시 / 현재 {page}
          페이지
        </p>
        <ul className={css.list}>
          {campingData?.map((list, i) => (
            //id가 따로 없고 한글명으로 구별해야할땐 . 으로 접근 못함 , i해준 이유는 야영장명이 같은곳이 있을 수 있으니까
            <li
              key={list["야영장명"] + i}
              onClick={() => handleCampingClick(list)}
            >
              <p>야영장명 : {list["야영장명"]}</p>
              <p>주소 : {list["주소"]}</p>
            </li>
          ))}
        </ul>
      </div>

      {isModalOpen && <DetailModal selected={selected} />}
      <Pagination data={data} />
    </main>
  );
};

export default CampingPage;
