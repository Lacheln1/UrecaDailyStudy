import React from "react";
import css from "./TodoListItem.module.css";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";
const TodoListItem = () => {
  return (
    <div className={css.todoListItem}>
      <div className={css.checkBox}>
        <MdCheckBoxOutlineBlank />
        <div className={css.text}>할 일</div>
      </div>
      <div className={css.remove}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
