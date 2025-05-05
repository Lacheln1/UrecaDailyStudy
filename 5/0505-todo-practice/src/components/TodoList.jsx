import React from "react";
import css from "./TodoList.module.css";
import TodoListItem from "./TodoListItem";
const TodoList = () => {
  return (
    <div className={css.todoList}>
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </div>
  );
};

export default TodoList;
