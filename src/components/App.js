import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });
  const reset = () => {
    setRenderBall(false);
    setBallPosition({ left: "0px", right: "0px" });
    setX(0);
    setY(0);
  };
  const handleClick = () => {
    setRenderBall(true);
  };
  const updateChanges = (event) => {
    const objCopy = { ...ballPosition };
    const key = event.keyCode;
    if (key === 39) {
      objCopy.left = +objCopy.left.slice(0, -2) + 5 + "px";
    } else if (key === 40) {
      objCopy.top = +objCopy.top.slice(0, -2) + 5 + "px";
    } else if (key === 37) {
      objCopy.left = +objCopy.left.slice(0, -2) - 5 + "px";
    }
    if (key === 38) {
      objCopy.top = +objCopy.top.slice(0, -2) - 5 + "px";
    }
    setBallPosition(objCopy);
  };
  useEffect(() => {
    document.addEventListener("keydown", updateChanges);
    return () => {
      document.removeEventListener("keydown", updateChanges);
    };
  });
  const renderChoice = () => {
    if (renderBall) {
      //console.log(renderBall);
      return <div className="ball" style={ballPosition}></div>;
    } else {
      return (
        <button className="start" onClick={handleClick}>
          Start
        </button>
      );
    }
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
