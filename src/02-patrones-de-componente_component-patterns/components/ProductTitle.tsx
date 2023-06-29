import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';
import { ProductTitleProps } from "../interfaces/interfaces";


// si style o className no vienen, no hay problema, no pone nada y ya
export const ProductTitle = ({title, className, style}: ProductTitleProps) => {
    const {product} = useContext(ProductContext);
    // la prioridad es el parametro, si lo envia es que se desea sobrescribir el titulo del producto, no mosotrar ese valor si no el parametro
    
  return (
    <span
      className={`${styles.productDescription} ${className}`}
      style={style}
    >
      {title ? title : product.title}
    </span>
  )
}
