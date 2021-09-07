import React from "react";

import "./App.css";
import Card from "./components/Card/Card"
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";



const App = () => {
  const comprarProducto = (product) => {
    console.log(`Has comprado el producto: ${product}`);
  };
  return( 

    <div>
      <NavBar />
      <h1 className="title">Bienvenido</h1>
      <div>
    <p >Tienda de Zapatillas Deportivas </p>
    
    <Header/>
    <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "1rem" }}>
        <Card
          title="zapatillas Fila Hombre "
          description="Esta es la descripción del producto hombre fila"
          image="https://sporting.vteximg.com.br/arquivos/ids/203992-1000-1000/9505584-120-00.jpg?v=637215151597830000"
          comprar={comprarProducto}
        />
        <Card
          title="Zapatillas Nike Mujer"
          description="Esta es la descripción del producto Zapatillas mujer"
          image="https://sporting.vteximg.com.br/arquivos/ids/294639-1000-1000/6H04599-000-1.jpg?v=637583176943400000"
          comprar={comprarProducto}
        />
        <Card
          title="Zapatillas Nike Hombres"
          description="Esta es la descripción del producto nike"
          image="https://sporting.vteximg.com.br/arquivos/ids/327483-350-350/4CJ1677-001-1.jpg?v=637627380916930000"
          comprar={comprarProducto}
        />
        </div>
    </div>
    </div>
  );
};
export default App;