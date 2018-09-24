import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import FavouriteContainer from "./favouritecontainer";
import ProductContainer from "./productcontainer";
import Nav from "./nav";
import Home from "./home";

class App extends Component {
  state = { products: [] };

  componentDidMount() {
    fetch("/api/v1/products")
      .then(res => res.json())
      .then(products => this.setState({ products }));
  }

  render() {
    return (
      <HashRouter>
      <div className="container">
      <Nav />
      <Home />
      <Route path="/products" component={ProductContainer}/>
       </div>
       </HashRouter>
    );
  }
}

export default App;
