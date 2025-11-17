import React, { useState } from "react";

const EventPractice = () => {
    const [message, setMessage] = useState("");
    return (
        <div>
            <h1>이벤트 연습</h1>
            <h2>현재 입력된 값 : {message}</h2>
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해보세요"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
        </div>
    );
};

export default EventPractice;
