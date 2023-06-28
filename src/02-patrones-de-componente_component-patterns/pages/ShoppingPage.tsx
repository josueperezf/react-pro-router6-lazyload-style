import { ProductCard } from '../components';

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
          <ProductCard product={product}>

            {/* las dos formas sirven ProductCard.Image y ProductImage. la que no esta comentada es mejor porque solo necesita importar el componente padre y ya*/}
            {/* <ProductImage img={product.img} />
            <ProductTitle title={product.title} />
            <ProductButtons /> */}

            <ProductCard.Image />
            <ProductCard.Title title="sobre escrito" />
            <ProductCard.Buttons/>
          </ProductCard>
        </div>
    </div>
  )
}
