import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';
import { ProductButtonsProps } from "../interfaces/interfaces";

export const ProductButtons = ({className, style}: ProductButtonsProps) => {
    const { counter, incrementarPor, decrementarPor} = useContext(ProductContext);
    return (
        <div className={`${styles.buttonsContainer}  ${className}`} style={style} >
            <button className={styles.buttonMinus} onClick={()=> decrementarPor(1)}>-</button>
            <div className={styles.countLabel } >{counter}</div>
            <button className={styles.buttonAdd } onClick={()=>incrementarPor(1)} >+</button>
        </div>
    )
}