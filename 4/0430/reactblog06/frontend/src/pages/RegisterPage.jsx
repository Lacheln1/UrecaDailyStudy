import React, { useState } from "react";
import css from "./RegisterPage.module.css";
const RegisterPage = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [passWordOk, setPassWordOk] = useState("");
  const [errorUserName, setErrorUserName] = useState("");
  const [errorPassWord, setErrorPassWord] = useState("");
  // 패스워드 확인
  const [errorPassWordOk, setErrorPassWordOk] = useState("");

  //유효성 검사
  const validdateUsername = (value) => {
    if (!value) {
      setErrorUserName("");
      return;
    }

    if (!/^[a-zA-Z][a-zA-Z0-9]{3,}$/.test(value)) {
      setErrorUserName(
        "사용자명은 영문자로 시작하는 4자 이상의 영문자 또는 숫자여야 합니다"
      );
    } else {
      setErrorUserName("");
    }
  };

  const validatePassword = (value) => {};
  const handleUserNameChange = (e) => {
    const value = e.target.value;
    setUserName(value);
    validdateUsername(value);
  };
  const handleUserPassWordChange = (e) => {
    const value = e.target.value;
    setPassWord(value);
    validatePassword(value);
  };
  return (
    <main className={css.registerpage}>
      <h2>회원가입 페이지</h2>
      <form className={css.container}>
        <input
          type="text"
          placeholder="사용자명"
          value={userName}
          onChange={handleUserNameChange}
        />
        <strong>{errorUserName}</strong>
        <input
          type="password"
          placeholder="패스워드"
          value={passWord}
          onChange={handleUserPassWordChange}
        />
        <strong>{errorPassWord}</strong>
        <input type="password" placeholder="패스워드 확인" value={passWordOk} />
        <strong>{errorPassWordOk}</strong>
        <button type="submit">가입하기</button>
      </form>
    </main>
  );
};

export default RegisterPage;
