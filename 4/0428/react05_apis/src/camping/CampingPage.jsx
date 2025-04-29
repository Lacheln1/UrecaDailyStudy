import React from "react";
import { useCamping } from "./useCamping";
import css from "./CampingPage.module.css";
import DetailModal from "./DetailModal";

const CampingPage = () => {
  const { data, isError, isLoading } = useCamping(1, 10);
  const campingData = data?.data;
  const totalCount = campingData?.totalCount;
  const page = campingData?.page;
  const perPage = campingData?.perPage;
  console.log("캠핑데이터=====", data?.data);
  const handleCampingClick = (e) => {};

  isLoading && <p>로딩중..</p>;
  isError && <p>에러</p>;
  return (
    <main>
      <h2>캠핑페이지</h2>
      <div>
        <p>총 nnnn개 중 n개 표시 / 현재 1페이지</p>
        <ul className={css.list}>
          {campingData?.map((list, i) => (
            //id가 따로 없고 한글명으로 구별해야할땐 . 으로 접근 못함 , i해준 이유는 야영장명이 같은곳이 있을 수 있으니까
            <li key={list["야영장명"] + i}>
              <p>야영장명 : {list["야영장명"]}</p>
              <p>주소 : {list["주소"]}</p>
            </li>
          ))}
        </ul>
      </div>
      <DetailModal />
    </main>
  );
};

export default CampingPage;
