import { useState } from 'react';
import { ProductoEnElCarrito, onChangeArgs } from '../interfaces/interfaces';


export const useShoppingCarroDeCompra = () => {
    // para mi los elementos del carrito deberian ser un array, pero fernando prefirio hacerlo como un objeto
  const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductoEnElCarrito }>({
    // '1': {...products[0], count: 10 }, // ejemplo de data, el indice de cada objeto es el id del producto, hara referencia al objeto y a la cantidad de productos q el cliente quiera comprar de ese producto
    // '2': {...products[1], count: 4 },
  });

  const onProductCountChange = ({count, product}: onChangeArgs) => {
    // count tiene el numero de productos que desea comprar de un producto, ejemplo  1 o 2 o 3 o 4 etc
    // console.log({count});
    
    setShoppingCart((oldShoppingCart)=> {
      
      if (count == 0) {
        // delete oldShoppingCart[product.id];esta linea sirve pero esta mutando y es mala practica
        // return {...shoppingCart};
        const {[product.id]: productoAEliminarDeCarritoDeCompra, ...rest} = oldShoppingCart;
        return rest;
      }
      return {...shoppingCart, [product.id]: {...product, count} }
    });
    // console.log({shoppingCart});
    
  }
  return {
    shoppingCart, onProductCountChange
  }
}
