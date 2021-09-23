import * as React from "react";

const ClickCounter = ({ counter, handleSumar, handleRestar }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "1rem 0",
      }}
    >
      <p>Cantidad: {counter}</p>
      <br />
      <button onClick={handleSumar}>+</button>
      <button onClick={handleRestar}>-</button>
    </div>
  );
};

export default ClickCounter;
