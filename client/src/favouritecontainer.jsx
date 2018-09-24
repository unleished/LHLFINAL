import React, { Component } from "react";
import "./App.css";

class FavouriteContainer extends Component {
  state = { products: [] };

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/products")
      .then(res => res.json())
      .then(products => this.setState({ products }));
  }

  render() {
    return (
<div></div>
    );
  }
}

export default FavouriteContainer;