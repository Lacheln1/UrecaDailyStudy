import React from 'react';
import css from './Pagination.module.css';

const Pagination = ({ data }) => {
  return (
    <div className={css.paginationArea}>
      <button>
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
