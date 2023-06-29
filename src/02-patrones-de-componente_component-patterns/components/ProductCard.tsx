import { createContext } from 'react';
import styles from '../styles/styles.module.css';

import { useProduct } from '../hooks/useProduct';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';

// ProductContext va a contener la informacion que voy a compartir entre los componentes hijos
export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);
const {Provider} = ProductContext;

// este componente lo relacionamos con sus componentes hijos, 'productTitle, productImage etc ' en el archivo index.ts de la carpeta components, alli hay un codigo especial para ello

// si por ejemplo style o clasname no vienen, no hay problema, al ser null react no lo pone y ya
export const ProductCard = ({ children, product, className, style }: ProductCardProps) => {
    const { counter, decrementarPor, incrementarPor} = useProduct();
    
    return (
        <Provider value={{counter, product, decrementarPor, incrementarPor}}>
            <div className={`${styles.productCard} ${className}` } style={style} >
                {children}
                {/* <ProductImage img={product.img} />
                <ProductTitle title={product.title} />
                <ProductButtons counter={counter} decrementarPor={decrementarPor} incrementarPor={incrementarPor}  /> */}
                
            </div>
        </Provider>
    )
}
