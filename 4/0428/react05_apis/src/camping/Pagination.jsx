import React from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";

const Pagination = ({ data }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const currnetPage = Number(searchParams.get("_page") || "1");
  //api data의 totalcount로 전체 데이터 개수를 파악하기
  const totalCount = data?.totalCount || 0;
  const perPage = data?.perPage || 10;
  const totalPages = Math.ceil(totalCount / perPage);
  const maxPageNumbers = 10;
  console.log("페이지네이션컴포에서 받은 데이타임!", data);

  const handlePageChange = (page) => {
    const params = new URLSearchParams(searchParams);
    params.set("_page", page);
    navigate(`/camping?${params}`);
  };

  const getPageNumber = () => {
    let startPage = Math.max(1, currnetPage - Math.floor(maxPageNumbers / 2));
    let endPage = startPage + maxPageNumbers - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPageNumbers + 1);
    }
    return Array.from({ length: endPage - startPage }, (_, i) => startPage + i);
  };

  if (totalPages <= 1) return null;

  return (
    <div>
      <button
        onClick={() => handlePageChange(currnetPage - 1)}
        disabled={currnetPage === 1}
      >
        이전
      </button>
      {getPageNumber().map((pageNum) => (
        <button key={pageNum} onClick={() => handlePageChange(pageNum)}>
          {pageNum}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currnetPage + 1)}
        disabled={currnetPage === totalPages}
      >
        다음
      </button>
    </div>
  );
};

export default Pagination;
