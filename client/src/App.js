import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import FavouriteContainer from "./favouritecontainer";
import ProductContainer from "./productcontainer";
import Nav from "./nav";
import Categories from "./Categories.jsx";

class App extends Component {
  state = { products: [] };

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/products")
      .then(res => res.json())
      .then(products => this.setState({ products }));
  }

  render() {
    return (
      <div className="container">
        <div>
          <Nav />
          <ProductContainer />
          <FavouriteContainer />
        </div>
      </div>
        <div>
          <Categories/>
        </div>
    );
  }
}

export default App;
