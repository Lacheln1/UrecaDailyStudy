import React from 'react';
import css from './Pagination.module.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { max } from 'lodash';

const Pagination = ({ initProductsData }) => {
  //데이터가 어떻게 나오는지 확인하기
  console.log('======', initProductsData);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { first, last, prev, nex, pages, items } = initProductsData.products;

  const currentPage = searchParams.get('_page') || 1;
  console.log('currentPage == ', currentPage);

  const handlePageChange = page => {
    const params = new URLSearchParams(searchParams); // 현재 파라미터 정보 유지
    params.set('_page', page); //페이지를 1로 초기화
    navigate(`/shop/?${page}`);
  };

  //페이지 번호 계산 함수
  const getPageNumber = () => {
    //한번에 보여줄 최대 페이지 번호 수
    const maxPageNumbers = 10;
    //전체 페이지가 최대 페이지보다 작으면 모든 페이지번호 표시
    if (pages > maxPageNumbers) {
      return Array.from({ length: maxPageNumbers }, (_, i) => i + 1);
    }

    //페이지가 많을 경우 현재 페이지 번호를 기준으로 주변 번호 생성
    // 예)현재 페이지 15=> 10~20까지 보여줌
    let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2));
    let endPage = Math.min(pages, startPage + maxPageNumbers - 1);

    //endPage가 pages보다 작을 경우 startPage조정
    if (endPage > pages) {
      endPage = pages;
      startPage = Math.max(1, endPage - maxPageNumbers + 1);
    }
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };

  const pageNumbers = getPageNumber();
  console.log('pageNumbers', pageNumbers);

  return (
    <div className={css.paginationArea}>
      <button
        onClick={() => {
          handlePageChange(first);
        }}
        disabled={currentPage === first}
        className={currentPage === first ? css.disabled : ''}
      >
        <i className="bi bi-chevron-left"></i>
      </button>
      {pageNumbers.map(num => (
        <button
          key={num}
          onClick={() => {
            handlePageChange(num);
          }}
        >
          {num}
        </button>
      ))}
      <button>
        <i className="bi bi-chevron-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
