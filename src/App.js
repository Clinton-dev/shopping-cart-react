import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './component/NavBar';
import Product from "./component/ProductWrapper";
import Cart from "./component/Cart";
import Home from "./component/Home";
import "./App.css";

function App() {
  const [numOfItems, setNumOfItem] = useState(0);

  // write a function to get number of items in cart
  function getItems(itemsAry) {
      setNumOfItem(itemsAry.length);
  }

  return (
    <BrowserRouter>
      <NavBar items={numOfItems}/>
      <br />
      <Switch>
        <Route exact path="/store">
          <Product itemFunc={getItems}/>
        </Route> 
        <Route path="/home" component={Home} />
        <Route exact Path="/shopping-cart">
           <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
