import { createContext } from 'react';
import styles from '../styles/styles.module.css';

import { useProduct } from '../hooks/useProduct';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';

// ProductContext va a contener la informacion que voy a compartir entre los componentes hijos
export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);
const {Provider} = ProductContext;


export const ProductCard = ({ children, product }: ProductCardProps) => {
    const { counter, decrementarPor, incrementarPor} = useProduct();
    
    return (
        <Provider value={{counter, product, decrementarPor, incrementarPor}}>
            <div className={styles.productCard}>
                {children}
                {/* <ProductImage img={product.img} />
                <ProductTitle title={product.title} />
                <ProductButtons counter={counter} decrementarPor={decrementarPor} incrementarPor={incrementarPor}  /> */}
                
            </div>
        </Provider>
    )
}

// el siguiente bloque se comenta porque segun fernando se ve feo, ademas puede arrojar problemas al momento de las importaaciones, asi que lo hicimos en el archivo index del la carpeta 'components/'
// lo siguientes es para hacer otra forma de colocar ProductTitle, y poder colocar ProductCard.Title, para relacionarlos
// ProductCard.Image = ProductImage;
// ProductCard.Title = ProductTitle;
// ProductCard.Buttons = ProductButtons;