import React from "react";
import { Link, NavLink } from "react-router-dom";
import css from "./Header.module.css";
const Header = () => {
  return (
    <header className={css.header}>
      <h1>
        <Link to={"/"}>로고</Link>
      </h1>
      <nav>
        <NavLink
          to="/register"
          className={({ isActive }) => (isActive ? css.active : "")}
        >
          회원가입
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
