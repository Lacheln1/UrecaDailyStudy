import React, { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  const { username, message } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const clickEvent = () => {
    alert(username + ":" + message);
    setForm({
      username: "",
      message: "",
    });
  };

  const pressEvent = (e) => {
    if (e.key === "Enter") {
      clickEvent();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력"
        value={message}
        onChange={onChange}
      />
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
        onKeyDown={pressEvent}
      />
      <button onClick={clickEvent}>확인하기</button>
    </div>
  );
};

export default EventPractice;
