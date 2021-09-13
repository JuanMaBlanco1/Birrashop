import React from 'react'
import Card from "../Card/Card"

const CardContainers = () => {
    const comprarProducto = (product) => {
        console.log(`Has comprado el producto: ${product}`);
      };
    return (
        <div>
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
    )
}

export default CardContainers








const productos = [
    {
      id: 0,
      title: "Mochila",
      description: "Esta es la descripción del producto 1",
      price: 10000,
      image: "https://cdn1.static-tgdp.com/ui/productimages/approved/std.lang.all/62/64/696264_sized_1800x1200_rev_1.jpg",
    },
    {
      id: 1,
      title: "Zapatillas",
      description: "Esta es la descripción del producto 2",
      price: 10001,
      image: "https://http2.mlstatic.com/D_NQ_NP_673060-MLA41186638161_032020-O.webp",
    },
    {
      id: 2,
      title: "Sombrilla",
      description: "Esta es la descripción del producto 3",
      price: 10002,
      image: "https://http2.mlstatic.com/D_NQ_NP_633602-MLA44808294705_022021-O.webp",
    },
    {
      id: 3,
      title: "Remera",
      description: "Esta es la descripción del producto 4",
      price: 10003,
      image: "https://http2.mlstatic.com/D_NQ_NP_877114-MLA31355994256_072019-O.webp",
    },
    {
      id: 4,
      title: "Bicicleta",
      description: "Esta es la descripción del producto 5",
      price: 10004,
      image: "https://http2.mlstatic.com/D_Q_NP_799178-MLA45120499765_032021-AB.webp",
    },
    {
      id: 5,
      title: "Laptop",
      description: "Esta es la descripción del producto 6",
      price: 10005,
      image: "https://http2.mlstatic.com/D_Q_NP_613206-MLA44385042469_122020-AB.webp",
    },
    {
      id: 6,
      title: "Colchón",
      description: "Esta es la descripción del producto 7",
      price: 10006,
      image: "https://http2.mlstatic.com/D_NQ_NP_929454-MLA31042393012_062019-O.webp",
    },
    {
      id: 7,
      title: "Smartphone",
      description: "Esta es la descripción del producto 8",
      price: 10007,
      image: "https://http2.mlstatic.com/D_Q_NP_715512-MLA46711394228_072021-AB.webp",
    },
  ];