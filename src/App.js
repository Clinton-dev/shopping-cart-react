import React from 'react';
import NavBar from './component/NavBar';
import Product from './component/Product';
import ProductData from './component/ProductData';

function App() {
  const products = ProductData.map(prod => <Product key={prod.id} prodImage={prod.image} title={prod.title} prodPrice={prod.price}/>);

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
