// le coloco asi porque son solo interfaces de este modulo, pero tambien se pudo llamar este archivo ProductInterfaces o algo asi

import { ReactElement } from "react"

export interface Product {
    id: string,
    title: string,
    img?: string
}
export interface ProductoEnElCarrito extends Product {
    count: number
}
// los argumentos que recibe el metodo de productcard cada vez que alguien presiona el boton para aumentar o disminuir los producto que quiere comprar
export interface onChangeArgs {
    product: Product,
    count: number
}
export interface ProductCardProps {
    product : Product,
    children?: ReactElement | ReactElement[],
    className? : string,
    style?: React.CSSProperties,  // el nombre del tipo de dato lo obtuve gracias a colocar el mouse sobre un div al que le haya colocar un style, alli me moestro React.CSSProperties
    value?: number, // es para es valor inicial que puede tener el contador donde estan los botones
    onChange?: (args: onChangeArgs) => void
}

export interface ProductImageProps {
    className?: string;
    img?: string;
    style?: React.CSSProperties,  // el nombre del tipo de dato lo obtuve gracias a colocar el mouse sobre un div al que le haya colocar un style, alli me moestro React.CSSProperties
}
export interface ProductTitleProps {
    className?: string;
    title?: string,
    style?: React.CSSProperties,  // el nombre del tipo de dato lo obtuve gracias a colocar el mouse sobre un div al que le haya colocar un style, alli me moestro React.CSSProperties
  }

export interface ProductButtonsProps {
    className?: string,
    style?: React.CSSProperties,  // el nombre del tipo de dato lo obtuve gracias a colocar el mouse sobre un div al que le haya colocar un style, alli me moestro React.CSSProperties
}

export interface ProductContextProps {
    counter: number,
    product: Product,
    decrementarPor: (value: number) => void,
    incrementarPor: (value: number) => void,
}

// HOC o mejor dicho high order component, es un componente que recibe compontes y los muestra en su interior 'children'
// esta interfaz la coloco fernando para asegurar, pero realmente no la pide vs code, es mas, el la copio de pararse con el mouse sobre la variable ProductCard que esta en el archivo index de la carpeta 'components'

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Image:   (parametros: ProductImageProps) => JSX.Element;
    Title:   (parametros: ProductTitleProps) => JSX.Element;
    Buttons: (parametros: ProductButtonsProps) => JSX.Element;
}