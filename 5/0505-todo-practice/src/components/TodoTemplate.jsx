import React from "react";
import css from "./TodoTemplate.module.css";
const TodoTemplate = ({ children }) => {
  return (
    <div className={css.todoTemplate}>
      <div className={css.appTitle}>일정 관리</div>
      <div className={css.content}>{children}</div>
    </div>
  );
};

export default TodoTemplate;
