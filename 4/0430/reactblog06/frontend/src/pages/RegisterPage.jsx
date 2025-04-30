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
  return (
    <main className={css.registerpage}>
      <h2>회원가입 페이지</h2>
      <form className={css.container}>
        <input type="text" placeholder="사용자명" value={userName} />
        <strong>{errorUserName}</strong>
        <input type="password" placeholder="패스워드" value={passWord} />
        <strong>{errorPassWord}</strong>
        <input type="password" placeholder="패스워드 확인" value={passWordOk} />
        <strong>{errorPassWordOk}</strong>
        <button type="submit">가입하기</button>
      </form>
    </main>
  );
};

export default RegisterPage;
