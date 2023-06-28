import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export const ProductTitle = ({title}: {title?: string}) => {
    const {product} = useContext(ProductContext);
    // la prioridad es el parametro, si lo envia es que se desea sobrescribir el titulo del producto, no mosotrar ese valor si no el parametro
  return (
    <span className={styles.productDescription} > {title ? title : product.title} </span>
  )
}
