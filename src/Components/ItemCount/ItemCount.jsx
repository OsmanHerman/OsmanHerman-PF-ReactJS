import styles from './ItemCount.module.css';
import { useState } from "react";

const ItemCount = ({stock, initial=1, onAdd}) => {
    const [contador, setContador] = useState(initial);
    
    const sumar = () => {
        if (contador < stock) setContador(contador + 1);
    };

    //useState[ valor , funcion que se usa para modificar el valor ]

    const restar = () => {
        if (contador > 1) setContador(contador - 1);
    };    

    return (
        <div className={styles.containerItemCount}>
            <div className={styles.contador}>
                <button className={styles.neg} onClick={restar}>-</button>
                <h2>{contador}</h2>
                <button className={styles.pos} onClick={sumar}>+</button>
            </div>
            
            <button className={styles.card} onClick={() => onAdd(contador)}>Añadir al carrito</button>

            {/* <button onClick={() => setContador (0)}>Reset</button>
            <button onClick={() => setContador (100)}>100</button> */}
        </div>        
    ) 
}

export default ItemCount