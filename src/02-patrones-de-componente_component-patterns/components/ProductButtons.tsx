import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';
import { ProductButtonsProps } from "../interfaces/interfaces";

export const ProductButtons = ({className, style}: ProductButtonsProps) => {
    const { counter, incrementarPor, decrementarPor, maxCount} = useContext(ProductContext);

    const seAlcanzoMaximo = useCallback(() => (!!maxCount && (maxCount === counter)), [counter, maxCount]); // segun es mejor preguntar !!maxCount que solo maxCount
    
    // true si el count es igual al maxCount y false en caso contrario, basado en ello debemos agregar la clase css disabled al botono de '+'
    return (
        <div className={`${styles.buttonsContainer}  ${className}`} style={style} >
            <button className={styles.buttonMinus} onClick={()=> decrementarPor(1)}>-</button>
            <div className={styles.countLabel } >{counter}</div>
            <button className={`${styles.buttonAdd} ${ seAlcanzoMaximo() ? styles.disabled : ''  } ` } onClick={()=>incrementarPor(1)} >+</button>
        </div>
    )
}