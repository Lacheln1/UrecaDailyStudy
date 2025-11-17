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

    const handleSubmit = () => {
        alert(username + " : " + message);
        setForm({
            username: "",
            message: "",
        });
    };

    const enterEvent = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };

    return (
        <div>
            <h1>이벤트 연습</h1>
            <h2>현재 입력된 값 : {message}</h2>
            <h2>닉네임 : {username} </h2>
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해보세요"
                value={message}
                onChange={onChange}
                onKeyDown={enterEvent}
            />

            <input
                type="text"
                name="username"
                placeholder="닉네임 입력"
                value={username}
                onChange={onChange}
                onKeyDown={enterEvent}
            />

            <button onClick={handleSubmit}>확인</button>
        </div>
    );
};

export default EventPractice;
