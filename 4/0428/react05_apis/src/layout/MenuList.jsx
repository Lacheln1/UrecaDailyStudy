import React from "react";
import { NavLink } from "react-router-dom";
import css from "./MainLayout.module.css";

const MenuList = () => {
  return (
    <ul>
      <li>
        <CustomNavLink to={"/"} label={"날씨 api 활용"} />
        <CustomNavLink to={"/camping"} label={"캠핑장 api 활용"} />
      </li>
    </ul>
  );
};

const CustomNavLink = ({ to, label }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? `${css.active}` : "")}
    >
      {label}
    </NavLink>
  </li>
);

export default MenuList;
