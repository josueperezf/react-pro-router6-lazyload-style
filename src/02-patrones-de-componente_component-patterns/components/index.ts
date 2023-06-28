// ProductCard es un HOC o mejor dicho high order component, es un componente que recibe compontes y los muestra en su interior 'children'
// creamos el alias solo porque queremos exportar una variable con el mismo nombre
import { ProductCard as ProductCardHOC} from "./ProductCard";
import { ProductImage} from "./ProductImage";
import { ProductButtons} from "./ProductButtons";
import { ProductTitle} from "./ProductTitle";
import { ProductCardHOCProps } from "../interfaces/interfaces";

export {
    ProductImage,
    ProductButtons,
    ProductTitle,
}

// exportamos una variable ProductCard ya que la que importamos le cambiamos el nombre para poder crear esta const nueva.
// no se hace ProductCard = ProductCard para no mutar por ello en alias para cambiarle el nombre 
export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Image: ProductImage,
    Buttons: ProductButtons,
    Title: ProductTitle,
})