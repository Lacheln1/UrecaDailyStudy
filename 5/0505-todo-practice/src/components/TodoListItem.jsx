import React from "react";
import css from "./TodoListItem.module.css";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";
const TodoListItem = ({ todo }) => {
  const { text, checked } = todo;
  return (
    <div className={css.todoListItem}>
      <div className={`${css.checkBox} ${checked ? css.checked : ""}`}>
        {checked ? <MdCheckBox color="#22b8cf" /> : <MdCheckBoxOutlineBlank />}
        <div className={css.text}>{text}</div>
      </div>
      <div className={css.remove}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
