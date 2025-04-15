import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <h1>
          <Link to={"/"}>
            <img src="../assets/logo.svg" alt="" />
          </Link>
        </h1>
        <div>
          <nav>
            <NavLink to={"/shop"}>shop</NavLink>
            <NavLink to={"/about"}>about</NavLink>
            <NavLink to={"/blog"}>blog</NavLink>
          </nav>
          <div>
            <i>아이콘</i>
            <i>아이콘</i>
            <i>아이콘</i>
          </div>
        </div>
        <i>햄버거</i>
      </div>
    </header>
  );
};

export default Header;
