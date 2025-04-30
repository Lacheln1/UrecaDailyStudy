import React, { useState } from "react";
import css from "./RegisterPage.module.css";
import axios from "axios";
const RegisterPage = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [passWordOk, setPassWordOk] = useState("");
  const [errorUserName, setErrorUserName] = useState("");
  const [errorPassWord, setErrorPassWord] = useState("");
  // 패스워드 확인
  const [errorPassWordOk, setErrorPassWordOk] = useState("");
  const [registerState, setRegisterState] = useState("");

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

  const validatePasswordCheck = (value, current = passWord) => {
    if (!value) {
      setErrorPassWordOk("");
      return;
    }
    if (value !== current) {
      setErrorPassWordOk("패스워드가 일치하지 않습니다");
    } else {
      setErrorPassWordOk("");
    }
  };

  // onChange함수들
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

  const handleUserPassWordOkChange = (e) => {
    const value = e.target.value;
    setPassWordOk(value);
    validatePasswordCheck(value);
  };

  //폼 제출전 폼값이 변경됐을수도있으니 한번 더 유효성 검사
  const register = async (e) => {
    e.preventDefault();
    console.log("회원가입", userName, passWord, passWordOk);
    validdateUsername(userName);
    validatePassword(passWord);
    validatePasswordCheck(passWordOk, passWord);

    if (
      errorUserName ||
      errorPassWord ||
      errorPassWordOk ||
      !userName ||
      !passWord ||
      !passWordOk
    ) {
      return;
    }

    //회원가입 api 호출
    try {
      setRegisterState("등록중");
      const response = await axios.post("http://localhost:3000/register");
    } catch (error) {
      console.log("회원가입 실패", error);
    }
  };
  return (
    <main className={css.registerpage}>
      <h2>회원가입 페이지</h2>
      <form className={css.container} onSubmit={register}>
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
        <input
          type="password"
          placeholder="패스워드 확인"
          value={passWordOk}
          onChange={handleUserPassWordOkChange}
        />
        <strong>{errorPassWordOk}</strong>
        <button type="submit">가입하기</button>
      </form>
    </main>
  );
};

export default RegisterPage;
