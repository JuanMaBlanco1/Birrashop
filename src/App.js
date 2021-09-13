import React from "react";

import "./App.css";

import CardContainers from "./components/containers/CardContainers";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";



const App = () => {
  
  return( 

    <div>
      <NavBar />
      <h1 className="title">Bienvenido</h1>
      <div>
    <p >Tienda de Zapatillas Deportivas </p>
    
    <Header/>
    <CardContainers/>
    </div>
    </div>
  );
};
export default App;