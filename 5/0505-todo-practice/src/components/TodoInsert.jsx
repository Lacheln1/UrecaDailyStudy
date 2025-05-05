import React, { useCallback, useState } from "react";
import { MdAdd } from "react-icons/md";
import css from "./TodoInsert.module.css";
const TodoInsert = () => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <form action="" className={css.todoInsert}>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
