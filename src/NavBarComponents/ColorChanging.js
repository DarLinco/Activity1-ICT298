import React, { useState } from "react";
import "./ColorChanging.css";

const ColorChanging = () => {
  const [currentColor, setCurrentColor] = useState("#FFFFFF");

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleButtonClick = () => {
    const newColor = getRandomColor();
    setCurrentColor(newColor);
  };

  return (
    <div
      className="box"
      style={{
        backgroundColor: currentColor,
        height: "70vh",
      }}
    >
      <div className="label">
        <h1>Click the button to change background color</h1>
        <button onClick={handleButtonClick}>Change Color</button>
      </div>
    </div>
  );
};

export default ColorChanging;
