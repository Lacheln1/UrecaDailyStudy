import ColorContext from "../contexts/color";

import React, { useContext } from "react";

const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: state.color,
        }}
      >
        <div
          style={{ width: "32px", height: "32px", background: state.subcolor }}
        ></div>
      </div>
    </>
  );
};

export default ColorBox;
