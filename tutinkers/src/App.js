import React from 'react';
import {Switch,Route} from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Component imports
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";


function App() {
  return (
    <>
      <Navbar />
      <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
      </Switch>
    </>
  );
}

export default App;




//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
