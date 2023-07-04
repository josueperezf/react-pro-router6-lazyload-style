import { ProductCard } from '../components';
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

const product = products[0];

export const ShoppingPage = () => {

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr/>
        
        <ProductCard
          product={product}
          key={product.id}
          className='bg-dark text-white'
          initialValues={{
            count: 4,
            //maxCount: 10
          }}
        >
          {
            ({count, maxCount, reset, isMaxCountReached, incrementarPor, decrementarPor}) => (
              <>
                <ProductCard.Image  className='custom-image'/>
                <ProductCard.Title title="sobreescribo el titulo" className='text-bold' />
                <ProductCard.Buttons className='custom-buttons'/>
                <button onClick={reset} >reset</button>
                <button onClick={()=>decrementarPor(2)} >-2</button>
                {
                  // si no hemos llegado al valor maximo permitido, entonces si se debe mostrar el boton
                  (!isMaxCountReached) && <button onClick={()=>incrementarPor(2)} >+2</button>
                }
                <span>{count} {maxCount ? `- ${maxCount}`: '' }</span>
              </>
            )
          }
        </ProductCard>


    </div>
  )
}
