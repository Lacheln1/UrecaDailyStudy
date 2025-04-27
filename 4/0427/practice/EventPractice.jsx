import React, { useState } from "react";

const EventPractice = () => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const clickEvent = () => {
    alert(message);
    setMessage("");
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력"
        value={message}
        onChange={handleChange}
      />

      <button onClick={clickEvent}>확인하기</button>
    </div>
  );
};

export default EventPractice;
