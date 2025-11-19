import React from "react";

const ValidationSample = () => {
    const names = ["눈사람", "얼음", "눈", "바람"];
    const nameList = names.map((name) => <li>{name}</li>);
    return <div>{nameList}</div>;
};

export default ValidationSample;
