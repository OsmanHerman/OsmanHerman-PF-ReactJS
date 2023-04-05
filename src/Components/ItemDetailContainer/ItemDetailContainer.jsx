import React from 'react'
import { useParams } from "react-router-dom";
import { products } from '../../productsMock';
import ItemCount from '../ItemCount/ItemCount';
import styles from './ItemDetailContainer.module.css'

const ItemDetailContainer =( ) => {
    
    const {id} = useParams();
    const productSelected = products.find ( (element) => element.id === id );

    const onAdd = (quantity)=>{
        if (quantity === 1) console.log(`Se agregó al carrito: ${quantity} elemento`)
        else console.log (`Se agregaron al carrito: ${quantity} elementos`);
    } 

    return (
        <div className={styles.containerDetail}>
            <div className={styles.containerDetailOne}>
                <img className={styles.img} src={productSelected.img} alt="" />
            </div>

            <div className={styles.containerDetailTwo}>
                <h1 className={styles.title}>{productSelected.title}</h1>
                <h3 className={styles.description}>{productSelected.description}</h3>
                <h2 className={styles.price}><span>$</span>{productSelected.price.toFixed(2)}</h2>
                <h5 className={styles.stock}>Hay disponible {productSelected.stock} unidades.</h5>
                <ItemCount className={styles.itemCount} stock={productSelected.stock} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer