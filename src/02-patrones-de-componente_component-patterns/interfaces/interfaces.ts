// le coloco asi porque son solo interfaces de este modulo, pero tambien se pudo llamar este archivo ProductInterfaces o algo asi

import { ReactElement } from "react"

export interface Product {
    id: string,
    title: string,
    img?: string
}

export interface ProductCardProps {
    product : Product,
    children?: ReactElement | ReactElement[]
}



export interface ProductContextProps {
    counter: number,
    decrementarPor: (value: number) => void,
    incrementarPor: (value: number) => void,
    product: Product
}

// HOC o mejor dicho high order component, es un componente que recibe compontes y los muestra en su interior 'children'
// esta interfaz la coloco fernando para asegurar, pero realmente no la pide vs code, es mas, el la copio de pararse con el mouse sobre la variable ProductCard que esta en el archivo index de la carpeta 'components'

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Image: ({ img }: { img?: string  }) => JSX.Element;
    Title: ({ title }: {title?: string }) => JSX.Element;
    Buttons: () => JSX.Element;
}