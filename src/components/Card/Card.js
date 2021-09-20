import * as React from "react";

import styles from "./Card.module.css";
import { Link } from "react-router-dom";


const Card = ({ title, description, image, comprar, price, productId  }) => {
  
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
        <button className={styles.button} onClick={comprar}>
          ¡Comprar ahora!
        </button>
        
      </div>
    );
};

export default Card;
