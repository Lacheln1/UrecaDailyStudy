import React from "react";
import css from "./TodoListItem.module.css";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";
const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { id, text, checked } = todo;
  return (
    <div className={css.TodoListItemVirtualized} style={style}>
      <div className={css.todoListItem}>
        <div
          className={`${css.checkBox} ${checked ? css.checked : ""}`}
          onClick={() => onToggle(id)}
        >
          {checked ? (
            <MdCheckBox color="#22b8cf" />
          ) : (
            <MdCheckBoxOutlineBlank />
          )}
          <div className={css.text}>{text}</div>
        </div>
        <div className={css.remove} onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
