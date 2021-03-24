import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './component/NavBar';
import Product from "./component/ProductWrapper";
import Cart from "./component/Cart";
import Home from "./component/Home";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
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
