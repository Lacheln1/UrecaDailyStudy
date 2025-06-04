import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
    const { count, label } = useSelector((state) => state.counter);
    return (
        <p className="m-1 p-3 border">
            {label} : {count}
        </p>
    );
};

export default Counter;
