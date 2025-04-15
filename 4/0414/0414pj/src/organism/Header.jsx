import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import css from "./Header.module.css";
import Logo from "./Logo";
const Header = () => {
  const location = useLocation();

  console.log(location.pathname); // 현재 경로
  console.log(location.search); // 쿼리 문자열
  console.log(location.hash); // URL 해시
  console.log(location.state); // 전달된 상태 객체
  return (
    <header className={css.hd}>
      <div>Current path: {JSON.stringify(location.state)}</div>
      <div className={css.con}>
        <h1 className={css.logo}>
          <Link to={"/"}>
            <Logo />
          </Link>
        </h1>
        <div className={css.gnb}>
          <nav>
            <CustomNavLink to={"/shop"} label={"shop"} />
            <CustomNavLink to={"/about"} label={"about"} />
            <CustomNavLink to={"/blog"} label={"blog"} />
          </nav>
          <div className={css.icon}>
            <CustomIconLink to={"/search"} icon={"bi-search"} />
            <CustomIconLink to={"/mypage"} icon={"bi-person-circle"} />
            <CustomIconLink to={"/cart"} icon={"bi-basket"} />
          </div>
        </div>
        <i className={css.ham}>햄버거</i>
      </div>
    </header>
  );
};

const CustomNavLink = ({ to, label }) => (
  <NavLink
    className={({ isActive }) => (isActive ? `${css.active}` : "")}
    to={to}
    state={{ data: "hello" }}
  >
    {label}
  </NavLink>
);
const CustomIconLink = ({ to, icon }) => (
  <NavLink
    className={({ isActive }) => (isActive ? `${css.active}` : "")}
    to={to}
  >
    <i className={`bi ${icon}`}></i>
  </NavLink>
);

export default Header;
