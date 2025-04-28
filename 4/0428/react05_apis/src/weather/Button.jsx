import React from "react";

const Button = ({ city, label, onClick }) => {
  return (
    <button id={city} onClick={() => onClick(city)}>
      {label}
    </button>
  );
};

export default Button;
