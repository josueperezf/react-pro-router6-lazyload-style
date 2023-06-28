import { useContext } from 'react';
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export const ProductImage = ({img = ''}) => {
    const {product} = useContext(ProductContext);
    const imagen = img || product.img; // la variable imagen  va a tomar el valor de la variable img, si no tiene valor, entonces tome el valor de product.img
    return (
        // el ternario del src es porque puede que el usuario no envie imagen y que producto tampoco tenga imagen, entonces debemos mostrar el noImage
        <img src={imagen ? imagen : noImage} className={styles.productImg} alt='Product image' />
    )
}