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

  return (
    <BrowserRouter>
      <NavBar items={numOfItems}/>
      <br />
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/store" component={Product} />
        <Route exact Path="/shopping-cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
