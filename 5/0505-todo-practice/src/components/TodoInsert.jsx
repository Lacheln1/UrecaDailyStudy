import React from "react";
import { MdAdd } from "react-icons/md";
import css from "./TodoInsert.module.css";
const TodoInsert = () => {
  return (
    <form action="" className={css.todoInsert}>
      <input type="text" placeholder="할 일을 입력하세요" />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
