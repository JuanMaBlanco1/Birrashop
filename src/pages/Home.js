import * as React from "react";
import Header from "../components/Header/Header";
import CardContainers from "../components/containers/CardContainers";

const Home = () => {
  return (
    <div>
      <h1>Productos</h1>
      <Header name="Tienda de Zapatillas" />
      <CardContainers />
    </div>
  );
};

export default Home;
