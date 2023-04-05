import React from 'react'
import { Link } from "react-router-dom";
import styles from "./Item.module.css";

const Item =( {element} ) => {
    return (
        <div className={styles.container}>
            <img className={styles.imag} src={element.img} alt="" />
            <h2 className={styles.tittle}>{element.title}</h2>
            <h3 className={styles.pricce}><span>$</span>{element.price.toFixed(2)}</h3>
            <Link className={styles.button} to={`/itemDetail/${element.id}`}>Ver detalle</Link>
            
        </div>
    )
}

export default Item