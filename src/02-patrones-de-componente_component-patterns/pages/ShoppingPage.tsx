import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css'

const product = {
  id: '1',
  title:  'Coffe Mug - Card',
  img: './coffee-mug.png'
}
export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr/>
        <div style={{display: "flex",  flexDirection: 'row', flexWrap: 'wrap'}}>
          {/* ejemplo colocando los componentes hijos con el nombre del padre. hijo, esto lo definimos en el index.ts de la carpeta 'component/index.ts' */}
          {/* tambien mostramos que hay algunas propiedades las podemos sobre escribir si deseamos, como el titulo la imagen y demas, esto por si la imagen que viene en el objeto de product no nos gusta */}
          <ProductCard product={product} className='bg-dark text-white '>
            <ProductCard.Image  className='custom-image'/>
            <ProductCard.Title title="sobreescribo el titulo" className='text-bold' />
            <ProductCard.Buttons className='custom-buttons'/>
          </ProductCard>

          {/* este ejemplo es colocando a los componentes hijo por su nombre como tal, ademas hacemos lo mismo que en el anterior mandandole clases css, que cada componente puede recibir y poner en sus div */}
          <ProductCard product={product} className='bg-dark text-white '>
            <ProductImage className='custom-image' />
            <ProductTitle className='text-bold' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>

          {/* este ejemplo es similar a los anteriores, solo mostramos que nuestro componente, ademas de poder hacer todo lo anterior mostrado,
          recibir clases css, poder sobre escribir propiedades y demas, tambien recibe style css y aplicarlo de manera independiente*/}
          <ProductCard product={product} style={{backgroundColor: '#70D1F8'}}>
            <ProductImage style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2 )'}} />
            <ProductTitle style={{fontWeight: 'bold'}} />
            <ProductButtons style={{display: 'flex', justifyContent: 'end'}} />
          </ProductCard>
        </div>
    </div>
  )
}
