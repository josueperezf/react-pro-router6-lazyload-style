import { ProductCard } from '../components';
import { useShoppingCarroDeCompra } from '../hooks/useShoppingCarroDeCompra';
import { Product } from '../interfaces/interfaces';
import '../styles/custom-styles.css'

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
  const { shoppingCart, onProductCountChange} = useShoppingCarroDeCompra();
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
