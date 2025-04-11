import React from "react";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <h2>메인페이지</h2>
      <div>메인 비주얼 영역</div>
      <nav>
        <a href="">리스트1</a>
        <a href="">리스트2</a>
        <a href="">리스트3</a>
      </nav>
      <div>아래는 outlet영역</div>
      <Outlet />
    </div>
  );
};

export default MainPage;
