import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import ProductContainer from "./productcontainer";
import Nav from "./nav";
import Home from "./home";
import AR from "./AR";

class App extends Component {
  state = { products: [] };

  getProducts(){

    fetch("http://localhost:3001/api/v1/products")
      .then(res => res.json())
      // .then(products => this.setState({ products }));
  }


  componentDidMount() {
    this.getProducts();

  }

  render() {
    return (
      <HashRouter>
      <div className="container">
      <Nav />
      <Home products={this.state.products}/>
      <Route path="/products" component={ProductContainer}/>
      <Route path="/test" component={AR}/>
       </div>
       </HashRouter>
    );
  }
}

export default App;
