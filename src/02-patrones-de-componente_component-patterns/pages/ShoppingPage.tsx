import { ProductCard } from '../components';
import { Product, ProductoEnElCarrito, onChangeArgs } from '../interfaces/interfaces';
import '../styles/custom-styles.css'
import { useState } from 'react';

const products: Product[] = [
  {
    id: '1',
    title:  'Coffe Mug - Card',
    img: './coffee-mug.png'
  },
  {
    id: '2',
    title:  'Coffe Mug - Meme',
    img: './coffee-mug2.png'
  }
];


/**
 * CONTROL PROPS => ES DARLE a otro programador, la facilidad de poder establecer y cambiar el valor de un componente
 * 
 * lo que se busca es que productCard sea al como los input en react,
 * que podamos asignarles valor inicial, y tambien agregarle un metodo onChange para hacer con ello algo desde fuera, algo como:
 *  
 * <input value={counter} onChange={(e) => setCounter(e.target.value) } />
 * 
 * el ejemplo anterior es solo referencia, para mostrar que un componente en react puede recibir valores para iniciar su contenido,
 * y tambien tiene onchange, para sacar del componente contenido y ver que hacer con el.
 * 
 * 
 * esto lo hacemos para que cuando a un producto se aumentemos el contador, es que queremos comprar algo,
 * entonces ese producto y la cantidad que desea llevar se almacenara en 'shoppingCart',
 * que este servira para mostrar como en una lista en miniatura, los productos que desea llevar el cliente
*/


export const ShoppingPage = () => {
  // para mi los elementos del carrito deberian ser un array, pero fernando prefirio hacerlo como un objeto
  const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductoEnElCarrito }>({
    // '1': {...products[0], count: 10 }, // ejemplo de data, el indice de cada objeto es el id del producto, hara referencia al objeto y a la cantidad de productos q el cliente quiera comprar de ese producto
    // '2': {...products[1], count: 4 },
  });

  const onProductCountChange = ({count, product}: onChangeArgs) => {
    // count tiene valor 1 para incrementar y -1 para restar al carrito de compra.
    console.log({count});
    
    setShoppingCart((oldShoppingCart)=> {
      // count es la cantidad de articulos que desea llevar de ese producto

      // vemos si el producto esta en el objeto oldShoppingCart, si no está, lo creamos con {...product, count: 0} y lo asignamos a la variable 'productoAProcesar'
      const productoAProcesar = oldShoppingCart[product.id] || {...product, count: 0} ;
      // el count que recibimos solo puede tener valores de 1 o -1, en cambio el count de  productoAProcesar es un contador normal que indica el numero de productos que desea llevar el cliente.
      // 'productoAProcesar.count + count' -> esto seria algo como  (2 + (+1)) 0 (2 + (-1)) donde signos iguales se suman y diferentes se restan
      // comparamos ese resultado con 0, y si es menos a cero dejara cero, si es mayor a cero, dejara el mayor, por eso la funcion de javascript se llama .max de mayor

      // si entra al if es que su velor no es cero y debemos incrementar en el carro de compra
      if (Math.max(productoAProcesar.count + count, 0) > 0) {
        productoAProcesar.count += count;
        return {...shoppingCart, [product.id]: productoAProcesar }
      }

      // si no entro en el if anterior, entonces hay que borrar el producto del carrito de compra, lo borramos con la siguiente linea
      const {[product.id]: productoAEliminarDeCarritoDeCompra, ...rest} = oldShoppingCart;
      return rest;

      // if (count == 0) {
      //   // delete oldShoppingCart[product.id];esta linea sirve pero esta mutando y es mala practica
      //   // return {...shoppingCart};
      //   const {[product.id]: productoAEliminarDeCarritoDeCompra, ...rest} = oldShoppingCart;
      //   return rest;
      // }
      // return {...shoppingCart, [product.id]: {...product, count} }
    });
    console.log({shoppingCart});
    
  }
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr/>
        <div style={{display: "flex",  flexDirection: 'row', flexWrap: 'wrap'}}>
          {
            products.map((product) => (
              // el valor del contador de ProductCard lo estamos controlando desde el metodo onProductCountChange
              <ProductCard
                product={product}
                key={product.id}
                className='bg-dark text-white'
                value={shoppingCart[product.id]?.count || 0} // esto es para que las tarjetas en miniatura tambien puedan actualizar el valor de las tarjetas grandes. buscamos si la tarjeta esta en el carrito de compras y cual es el valor de count, si no hay, le ponemos cero 0
                onChange={(arg)=>onProductCountChange(arg)}
              >
                <ProductCard.Image  className='custom-image'/>
                <ProductCard.Title title="sobreescribo el titulo" className='text-bold' />
                <ProductCard.Buttons className='custom-buttons'/>
              </ProductCard>
            ) )
          }

        </div>

        <div className='shopping-cart'>
          {
            // Object.keys(shoppingCart).map((id: string) => ( //keys retorna un array de las llaves '[1,2,3]', entries revuelve una matriz con clave valor ['1': {"id": "1","title": "Coffe Mug - Card","img": "./coffee-mug.png","count": 1}]  1 es la clave, lo demas es valor de cada item
            Object.entries(shoppingCart).map(([key, product]) => (
              <ProductCard
                product={product}
                key={key} 
                className='bg-dark text-white '
                style={{width: '100px'}}
                value={product.count}
                onChange={(arg)=>onProductCountChange(arg)}
              >
                <ProductCard.Image  className='custom-image'/>
                <ProductCard.Buttons className='custom-buttons'/>
              </ProductCard>
            ))
          }
        </div>




          <code>
            <pre>
                {JSON.stringify(shoppingCart, null, 5)}
            </pre>
          </code>
    </div>
  )
}
