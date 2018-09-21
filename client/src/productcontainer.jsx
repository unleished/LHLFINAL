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
        <div id="thumbnail">
          <div className="row">
            <div className="col-md-4">
              <div className="thumbnail">
                <a href="/w3images/lights.jpg" target="_blank">
                  <img src="images/vegetal-chair-black.jpg"/>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="thumbnail">
                <a href="/w3images/nature.jpg" target="_blank">
                  <img src="images/vegetal-chair-chocolate.jpg"/>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="thumbnail">
                <a href="/w3images/fjords.jpg" target="_blank">
                  <img src="images/vegetal-chair-mauve-grey.jpg"/>
                </a>
              </div>
            </div>
          </div>
        </div>
     </section>
     );
  }
}

export default ProductContainer;