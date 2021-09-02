import React from "react";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";



const App = () => {

   const nameStyle = {
  backgroundColor: "black",
  color: "white",
 
};

  return( 

    <div>
      <NavBar />
      <h1 className="title">Bienvenido</h1>
      <div>
    <p style={nameStyle}>La Taberna Del Cervecero </p>
    <p>las mejores cervezas del Pais</p>
    </div>
    </div>
  );
};
export default App;