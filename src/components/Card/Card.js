import * as React from "react";

import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import ClickCounter from "../ClickCounter/ClickCounter";


const Card = ({ title, description, image, handleComprarProducto, price, productId  }) => {
  const [counter, setCounter] = React.useState(0);
  console.log(counter)
  const handleSumar = () => {
    
    setCounter((prevState) => prevState + 1);
   
  };
  const handleRestar = () => {
    if (counter > 0) { 
    setCounter((prevState) => prevState - 1);  }
    
  }
  const producto = {title, description, image, price, productId}
    return (
      <div className={styles.card}>
        <Link style={{ textDecoration: "none", color: "inherit" }} to={`/product/${productId}`}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt={title} />
        <p className={styles.description}>{description}</p>
        </div>
        <p className={styles.price}>$ {price}</p>
        </Link>
        <ClickCounter counter = {counter} handleSumar ={handleSumar} handleRestar  ={handleRestar} />
        <Link style={{ textDecoration: "none", color: "inherit" }} to={`/Card/`}>
     
        <button className={styles.button} onClick={()=>handleComprarProducto(producto, counter)}>
          ¡Comprar ahora!
        </button>
        </Link>
      </div>
    );
};

export default Card;
