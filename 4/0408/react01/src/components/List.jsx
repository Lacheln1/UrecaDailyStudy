import React from 'react';

const List = ({ list, setData }) => {
  const removeItem = () => {
    setData((prev) => {
      const newData = prev.filter((item) => item !== list);
      localStorage.setItem('trip', JSON.stringify(newData));
      return newData;
    });
  };
  return (
    <li>
      <p>{list}</p>
      <i className="fa-solid fa-trash-can" onClick={removeItem}></i>
    </li>
  );
};

export default List;
