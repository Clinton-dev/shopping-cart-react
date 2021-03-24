import React,{useState} from 'react';
import ProductData from './ProductData';
import Product from './Product';

function ProductWrapper() {
  const [shoppingCart, setShoppingCart] = useState([]);

  function addItem(product) {
    setShoppingCart(shoppingCart.push(product));
    console.log(shoppingCart);
  }
  
  const products = ProductData.map(prod => <Product key={prod.id} prodImage={prod.image} title={prod.title} prodPrice={prod.price} prodFunc={addItem} />);

  return(
    <div className="container">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {products}
          </div>
        </div>
  );
}

export default ProductWrapper;