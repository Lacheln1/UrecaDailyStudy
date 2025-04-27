import React, { useState } from "react";

const EventPractice = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const clickEvent = () => {
    alert(name + ":" + message);
    setMessage("");
    setName("");
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
        onChange={handleMessageChange}
      />
      <input
        type="text"
        name="name"
        placeholder="사용자명"
        value={name}
        onChange={handleNameChange}
        onKeyDown={pressEvent}
      />
      <button onClick={clickEvent}>확인하기</button>
    </div>
  );
};

export default EventPractice;
