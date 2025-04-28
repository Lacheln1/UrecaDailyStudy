import React from "react";
import { NavLink } from "react-router-dom";
import css from "./MainLayout.module.css";

const MenuList = () => {
  return (
    <ul>
      <li>
        <NavLink
          to={"/"}
          className={(isActive) => (isActive ? `${css.active}` : "")}
        >
          날씨 api활용
        </NavLink>
      </li>
    </ul>
  );
};

export default MenuList;
