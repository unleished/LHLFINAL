 import React, { Component } from "react";
import "./App.css";

class ProductContainer extends Component {
  state = { products: [] };

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/products")
      .then(res => res.json())
      .then(products => this.setState({ products }));
  }

  render() {
    return (
    <section id="product-container">
      <img src="images/vegetal-chair.jpg"/>
        <div>
          <img class="img-thumbnail"src="images/vegetal-chair-black.jpg"/>
        </div>
     </section>
     );
  }
}

export default ProductContainer;