import React from 'react'
import Card from "../Card/Card"
import { Link } from "react-router-dom";

const CardContainers = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const url = "https://fakestoreapi.com/products";

    setLoading(true);
    fetch(url)
      .then((response) => {
        console.log(response.body, "response")
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data) => setData(data))
     /* .catch((error) => setError(error))*/ 
      .catch((error) => console.log(error,"error" ))
      .finally(() => setLoading(false));
  }, []);

  const handleComprarProducto = (producto, counter) => {
    
     console.log(`Has comprado el producto: ${producto}, ${counter}`); 
  };


  const postProduct = async () => {
    const newProduct = {
      title: "Zapatillas nike ",
      description: "zapatillas de hombre",
      price: 10008,
      image: "https://fotos.perfil.com/2020/01/08/con-el-vision-s-sony-incursiona-en-el-mundo-de-los-autos-853254.jpg",
    };

    const response = await fetch("http://localhost:3001/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });

    return response.json();
  };

  return (
    <>
      <button onClick={postProduct}>Cargar nuevo producto</button>
      <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
        {loading && <p>Cargando...</p>}
        {error && (
          <p>
            Ha habido un error: {error.status} {error.statusText}
          </p>
        )}

        {data?.map((producto) => {
          return (
            <Card
              key={producto.id}
              title={producto.title}
              description={producto.description}
              image={producto.image}
              price={producto.price}
              handleComprarProducto={handleComprarProducto}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardContainers;




