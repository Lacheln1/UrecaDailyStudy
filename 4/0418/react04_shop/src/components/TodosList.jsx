import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
const TodosList = () => {
  const { todos } = useSelector(state => state.todos);
  console.log(todos);

  return (
    <ListGroup>
      {/* <ListGroup.Item disabled>Cras justo odio</ListGroup.Item> */}
      <ListGroup.Item>
        <p>할일 내용이 입력되는곳</p>
        <p>yyyy.mm.dd</p>
        <i className="bi bi-trash"></i>
      </ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    </ListGroup>
  );
};

export default TodosList;
