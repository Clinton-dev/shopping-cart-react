import React, {useState, useEffect} from 'react';
import NavBar from './component/NavBar';
import Product from './component/Product';
import ProductData from './component/ProductData';

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);
 
  function addItem(product) {
//    setShoppingCart(shoppingCart.push(product));
    console.log('an item was added');
  }

  const products = ProductData.map(prod => <Product key={prod.id} prodImage={prod.image} title={prod.title} prodPrice={prod.price} prodFunc={addItem}/>);

  return (
    <div>
      <NavBar />
      <br />
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          { products }
        </div>
      </div>
    </div>
  );
}

export default App;
