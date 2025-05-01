import React, { useState } from "react";
import css from "./RegisterPage.module.css";
import axios from "axios";
const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [errorUserName, setErrorUserName] = useState("");
  const [errorPassWord, setErrorPassWord] = useState("");
  //로그인 상태메세지 확인
  const [loginStatus, setLoginStatus] = useState("");

  //로그인 후 페이지 이동
  const [redirect, setRedirect] = useState(false);
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
    setLoginStatus("");
    validdateUsername(userName);
    validatePassword(passWord);
    if (errorPassWord || errorUserName || !userName || !passWord) {
      setLoginStatus("아이디와 패스워드를 확인하세요");
      return;
    }

    const response = await axios.post(`http://localhost:3000/login`, {
      userName,
      passWord,
    });

    console.log(response);
    if (response.status === 200) {
      setLoginStatus("로그인성공");
      setRedirect(true);
    }
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
