import * as React from "react";

const ClickCounter = () => {
  const [counter, setCounter] = React.useState(0);

  const handleSumar = () => {
    
    setCounter((prevState) => prevState + 1);
   
  };
  const handleRestar = () => {
    if (counter > 0) { 
    setCounter((prevState) => prevState - 1);  }
    
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "1rem 0" }}>
      <p>Clicks: {counter}</p>
      <br />
      <button onClick={handleSumar}>Sumar</button>
      <button onClick={handleRestar}>Restar</button>
    </div>
  );
};

export default ClickCounter;