import React from 'react'
import Card from "../Card/Card"

const CardContainers = () => {
  const [items, setItems] = React.useState([]);
  const [cargando, setCargando] = React.useState(false);

  React.useEffect(() => {
    setCargando(true);
    getProducts()
      .then((result) => setItems(result))
      .finally(() => setCargando(false));
  }, []);
    const comprarProducto = (product) => {
        console.log(`Has comprado el producto: ${product}`);
      };
      const getProducts = () => {
        return new Promise((resolve) => {
          setTimeout(() => resolve(productos), 2000);
        });
      };
    return (
        <div>
                <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "1rem" }}>
                {cargando && <p style={{ fontSize: "2rem", margin: "2rem 0" }}>Cargando....</p>}
                {!cargando &&
        items?.map((producto) => {
          return (
            <Card
              key={producto.id}
              title={producto.title}
              description={producto.description}
              image={producto.image}
              price={producto.price}
              comprar={comprarProducto}
            />
          );
        })}
        </div>
        </div>
    )
}

export default CardContainers








const productos = [
    {
      id: 0,
      title: "Zapatillas nike",
      description: "zapatillas urbanas ultimo modelo",
      price: 20000,
      image: "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw725c6174/products/NI_AH6789-012/NI_AH6789-012-1.JPG",
    },
    {
      id: 1,
      title: "Remera Jordan PSG Wordmark",
      description: "Para todas las edades",
      price: 5000,
      image: "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw3c4b203f/products/NI_CK9785-010/NI_CK9785-010-1.JPG",
    },
    {
      id: 2,
      title: "Short Puma",
      description: "Short Deportivo",
      price: 10002,
      image: "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw6089ea92/products/PU_534599-01/PU_534599-01-1.JPG",
    },
    {
      id: 3,
      title: "Buzo adidas Hulk",
      description: "Para Adultos",
      price: 13000,
      image: "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw47fa540c/products/AD_GP3458/AD_GP3458-1.JPG",
    },
    {
      id: 4,
      title: "Musculosa Jordan Mujer",
      description: "Para chicas",
      price: 2500,
      image: "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw83408811/products/NI_DD0285-382/NI_DD0285-382-1.JPG",
    },
    {
      id: 5,
      title: "Zapatillas Pumas",
      description: "Todos los talles",
      price: 9500,
      image: "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw3ff65584/products/PU_381517-04/PU_381517-04-1.JPG",
    },
    {
      id: 6,
      title: "Pantalon Puma",
      description: "Pantalon Hombres",
      price: 8500,
      image: "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw46e2957c/products/PU_531514-64/PU_531514-64-1.JPG",
    },
    {
      id: 7,
      title: "Calzan Mujer",
      description: "Calzas Mujer",
      price: 6500,
      image: "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw2059aaee/products/PU_530847-28/PU_530847-28-1.JPG",
    },
  ];