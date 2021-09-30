import React from "react";

import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Quienes from "./pages/Quienes"
import ProductDetail from "./pages/ProductDetail";
import Card from "./pages/Card"
import BlankPage from "./pages/BlankPage";
import { CartProvider } from "./components/context/CartContext";

const App = () => {
  
  return( 

     
      <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Quienes" component={Quienes} />
       
       <Route exact path="/product/:id" component={ProductDetail} />
       <Route exact path="/Card" component={Card} />
       <Route exact path="/blank" component={BlankPage} />
        <Route path="*" component={NotFound} />
      </Switch>
      <footer>Esto es un footer.</footer>
      </BrowserRouter>
     
  
    
  );
};
export default App;