import React, { useState } from "react";

const EventPractice = () => {
    const [message, setMessage] = useState("");
    const [nickname, setNickname] = useState("");

    const confirmMessage = (e) => {
        setMessage(e.target.value);
    };

    const resetMessage = () => {
        setMessage("");
        setNickname("");
    };

    const changeNickname = (e) => {
        setNickname(e.target.value);
    };
    return (
        <div>
            <h1>이벤트 연습</h1>
            <h2>현재 입력된 값 : {message}</h2>
            <h2>닉네임 : {nickname} </h2>
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해보세요"
                value={message}
                onChange={confirmMessage}
            />

            <input
                type="text"
                name="nickname"
                placeholder="닉네임 입력"
                value={nickname}
                onChange={changeNickname}
            />

            <button onClick={resetMessage}>초기화</button>
        </div>
    );
};

export default EventPractice;
