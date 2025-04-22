import React from 'react';
import css from './Pagination.module.css';
import { useNavigate, useSearchParams } from 'react-router-dom';

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
      <button>1</button>
      <button>2</button>
      <button className={css.active}>3</button>
      <button>4</button>
      <button>5</button>
      <button>
        <i className="bi bi-chevron-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
