import * as React from "react";
import ClickCounter from "../ClickCounter/ClickCounter";
import styles from "./Card.module.css";


const Card = ({ title, description, image, comprar, c }) => {
    console.log(styles);
    return (
      <div className={styles.card}>
        <h3 className={styles.title}>{title}</h3>
        <img className={styles.image} src={image} alt={title} />
        <p className={styles.description}>{description}</p>
        <button className={styles.button} onClick={comprar}>
          ¡Comprar ahora!
        </button>
        <ClickCounter/>
      </div>
    );
};

export default Card;
