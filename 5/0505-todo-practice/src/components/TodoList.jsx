import React from "react";
import css from "./TodoList.module.css";
import TodoListItem from "./TodoListItem";
const TodoList = ({ todos, onRemove }) => {
  return (
    <div className={css.todoList}>
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default TodoList;
