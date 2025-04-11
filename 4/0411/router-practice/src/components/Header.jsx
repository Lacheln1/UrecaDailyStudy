import React from "react";
import { Link, NavLink } from "react-router-dom";
import shelly from "../assets/Shelly.svg";
import style from "./Header.module.css";
const Header = () => {
  return (
    <header className={style.hd}>
      <h1>
        {/* NavLink는 a태그로 나타난다 */}
        <NavLink to={"/"}>
          <img src={shelly} alt="logo" />
        </NavLink>
      </h1>
      <nav>
        <Link
          className={({ isActive }) => (isActive ? style.active : "")}
          to={"/about"}
        >
          회사소개
        </Link>
        <NavLink
          className={({ isActive }) => (isActive ? style.active : "")}
          to={"/shop"}
        >
          샵
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? style.active : "")}
          to={"/"}
        >
          메인페이지
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
