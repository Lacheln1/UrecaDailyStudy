import React from 'react';
import List from './List';

const PostList = ({ data, setData }) => {
  console.log(data);
  return (
    <div className="mw">
      <div className="totalCount">
        <strong>Total</strong>
        <span>{data.length}</span>
      </div>
      <ul className="postList">
        {data.map((list, index) => (
          <List key={index} list={list} setData={setData} />
        ))}
      </ul>
    </div>
  );
};

export default PostList;
