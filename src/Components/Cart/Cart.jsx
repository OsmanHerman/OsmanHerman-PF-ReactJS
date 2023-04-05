import React from 'react'
import styles from './Cart.module.css';

const Cart =( ) => {
    return (
        <div className={styles.cart}>
            <h1 className={styles.title}>Carrito de compras en construcción</h1>
            <img className={styles.cartCont} src="https://img.freepik.com/fotos-premium/trabajador-constructor-carro-lleno-herramientas-construccion_1401-1552.jpg?w=2000" alt="" />
        </div>
    )
}

export default Cart