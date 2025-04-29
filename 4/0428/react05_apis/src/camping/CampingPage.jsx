import React from "react";
import { useCamping } from "./useCamping";

const CampingPage = () => {
  const { data, isError, isLoading } = useCamping(1, 10);
  const campingData = data?.data;
  const totalCount = campingData?.totalCount;
  const page = campingData?.page;
  const perPage = campingData?.perPage;
  console.log("캠핑데이터=====", data);
  return (
    <main>
      <h2>캠핑페이지</h2>
      <div>
        <p>총 nnnn개 중 n개 표시 / 현재 1페이지</p>
        <ul>
          <li>
            <p>야영장명</p>
            <p>주소</p>
            <p>연락처</p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default CampingPage;
