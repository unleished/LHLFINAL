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

class App extends Component {
  state = { images: [] };

  getProducts(){

    fetch("http://localhost:3001/api/v1/images")

      .then(res =>  res.json())
      .then(images => { this.setState({ images })});
  }


  componentDidMount() {

    this.getProducts();

  }

  render() {

    return (

      <HashRouter>
      <div className="container">
      <Nav />
      <Home images={this.state.images}/>
      <Route path="/products" component={ProductContainer}/>
       </div>
       </HashRouter>
    );
  }
}

export default App;
