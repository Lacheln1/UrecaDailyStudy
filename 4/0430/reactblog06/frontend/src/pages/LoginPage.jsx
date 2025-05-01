import React, { useState } from "react";
import css from "./RegisterPage.module.css";
const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [errorUserName, setErrorUserName] = useState("");
  const [errorPassWord, setErrorPassWord] = useState("");
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

  const validatePassword = (value) => {
    if (!value) {
      setErrorPassWord("");
      return;
    }
    if (value.length < 4) {
      setErrorPassWord("패스워드는 4자 이상이어야 합니다");
    } else {
      setErrorPassWord("");
    }
  };

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

  const login = async (e) => {
    e.preventDefault();
  };
  return (
    <main className={css.loginpage}>
      <h2>로그인 페이지</h2>
      <form action="" className={css.container} onSubmit={login}>
        <input
          type="text"
          placeholder="아이디"
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
        <button type="submit">로그인</button>
      </form>
    </main>
  );
};

export default LoginPage;
