import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <ul>
            <li>
                <Link to={"/red"}>red</Link>
            </li>
            <li>
                <Link to={"/blue"}>blue</Link>
            </li>
        </ul>
    );
};

export default Menu;
