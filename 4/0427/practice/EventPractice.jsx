import React, { useState } from "react";

const EventPractice = () => {
  const [message, setMessage] = useState("");

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={() => {
          alert(message);
          setMessage("");
        }}
      >
        확인하기
      </button>
    </div>
  );
};

export default EventPractice;
