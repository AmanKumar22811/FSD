import React, { useState } from "react";
import img from "../assets/react.svg";

const ImageManipulation = () => {
  const [height, setHeight] = useState(100);
  const [width, setWidth] = useState(100);
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);
  const [rotation, setRotation] = useState(0);

  const changeBG = () => {
    setRed(Math.random() * 250);
    setBlue(Math.random() * 250);
    setGreen(Math.random() * 250);
  };

  return (
    <div
      style={{
        height: "400px",
        width: "400px",
        background: `rgb(${red},${blue},${green})`,
        marginLeft: "450px",
      }}
    >
      <div>
        <img
          src={img}
          height={height}
          width={width}
          style={{
            marginLeft: "140px",
            transform: `rotate(${rotation}deg)`,
            transition: "transform 0.3s ease",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <button onClick={() => setHeight(height + 100)}>Enhance Height</button>
        <button onClick={() => setWidth(width + 100)}>Enhance Width</button>
        <button onClick={() => setRotation(rotation + 45)}>Rotate</button>
        <button onClick={changeBG}>BG Color</button>
      </div>
    </div>
  );
};

export default ImageManipulation;
