import React from "react";
import css from "./DefaultLayout/module.css";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
const DefaultLayout = () => {
  return (
    <main className={css.defaultLayout}>
      <Header />
      <Outlet />
      <footer>카피라이트 영역</footer>
    </main>
  );
};

export default DefaultLayout;
