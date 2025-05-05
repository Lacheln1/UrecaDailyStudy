import React from "react";
import css from "./TodoList.module.css";
import TodoListItem from "./TodoListItem";
const TodoList = ({ todos }) => {
  return (
    <div className={css.todoList}>
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
