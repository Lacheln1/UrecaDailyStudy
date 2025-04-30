import React from "react";
import { Link, NavLink } from "react-router-dom";
import css from "./Header.module.css";
const Header = () => {
  return (
    <header>
      <h1>
        <Link to={"/"}>로고</Link>
      </h1>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? css.active : "")}
        ></NavLink>
      </nav>
    </header>
  );
};

export default Header;
