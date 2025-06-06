import React from 'react';
import css from './Pagination.module.css';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Pagination = ({ initProductsData }) => {
  //데이터가 어떻게 나오는지 확인하기
  console.log('======', initProductsData);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const { first, last, prev, next, pages } = initProductsData.products;
  const currentPage = Number(searchParams.get('_page') || '1');

  const handlePageChange = page => {
    const params = new URLSearchParams(searchParams);
    params.set('_page', page);
    navigate(`/Shop/?${params}`);
  };

  //페이지 번호 계산 함수
  //한번에 보여줄 최대 페이지 번호 수
  const getPageNumbers = () => {
    const maxPageNumbers = 10;
    if (pages <= maxPageNumbers) {
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

  const pageNumbers = getPageNumbers();

  return (
    <div className={css.paginationArea}>
      <button
        onClick={() => {
          handlePageChange(first);
        }}
        disabled={currentPage === first}
        className={currentPage === first ? css.disabled : ''}
      >
        처음으로이동
      </button>
      <button
        onClick={() => {
          handlePageChange(prev);
        }}
        disabled={prev === null || currentPage === first}
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
          className={num === currentPage ? `${css.active}` : ''}
        >
          {num}
        </button>
      ))}
      <button
        onClick={() => {
          handlePageChange(next);
        }}
        disabled={next === null || currentPage === last}
        className={currentPage === last ? css.disabled : ''}
      >
        <i className="bi bi-chevron-right"></i>
      </button>
      <button
        onClick={() => {
          handlePageChange(last);
        }}
        disabled={next === null || currentPage === last}
      >
        마지막 페이지 이동
      </button>
    </div>
  );
};

export default Pagination;
