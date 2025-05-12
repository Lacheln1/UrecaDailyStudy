import ColorContext from "../contexts/color";

import React from "react";

const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      {(value) => (
        <div
          style={{ width: "64px", height: "64px", background: value.color }}
        ></div>
      )}
    </ColorContext.Consumer>
  );
};

export default ColorBox;
