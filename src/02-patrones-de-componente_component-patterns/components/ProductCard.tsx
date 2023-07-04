import { createContext } from 'react';
import styles from '../styles/styles.module.css';

import { useProduct } from '../hooks/useProduct';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';

// ProductContext va a contener la informacion que voy a compartir entre los componentes hijos
export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);
const {Provider} = ProductContext;

// este componente lo relacionamos con sus componentes hijos, 'productTitle, productImage etc ' en el archivo index.ts de la carpeta components, alli hay un codigo especial para ello

// si por ejemplo style o clasname no vienen, no hay problema, al ser null react no lo pone y ya
export const ProductCard = ({ children, product, className, style, value, initialValues, onChange }: ProductCardProps) => {
    // value es el valor inicial que le queremos dar al contador
    
    const { counter, maxCount, isMaxCountReached,  decrementarPor, incrementarPor, reset} = useProduct({onChange, product, value, initialValues});
    
    return (
        <Provider value={{counter, maxCount, product, decrementarPor, incrementarPor}}>
            <div className={`${styles.productCard} ${className}` } style={style} >
                {/*
                    IMPORTANTEEEE::

                    si el 'children' es del tipo de dato ReactElement '<>hola mundo</> ', para mostrarlo se debe colocar asi  { children }, pero,
                    si el 'children' es del tipo de dato () => JSX.Element ' ()=> (<>hola mundo</>) ', , para mostrarlo se debe colocar asi  { children() } ya que es una funcion
                */}
                {!!children && children({count: counter, maxCount, product, isMaxCountReached, decrementarPor, incrementarPor, reset})}
            </div>
        </Provider>
    )
}
