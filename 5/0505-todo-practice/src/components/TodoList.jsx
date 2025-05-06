import React from "react";
import css from "./TodoList.module.css";
import TodoListItem from "./TodoListItem";
const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className={css.todoList}>
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default React.memo(TodoList);
