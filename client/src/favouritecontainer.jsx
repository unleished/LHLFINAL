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
      <section id="product-description">
        <h3>Chair: vegetal</h3>
        <p id="text-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel neque a est pharetra consectetur. Fusce sem quam, commodo et aliquet nec, imperdiet quis elit. Vestibulum fringilla, justo eu fermentum sagittis, ex tellus volutpat tortor, ac accumsan mauris mi eu ante.
        </p>
        <img className="qrcode" src="http://api.qrserver.com/v1/create-qr-code/?data=http://10.110.105.16:8000&size=10X10"/>
        <p>Check it out in AR!</p>
     </section>
    );
  }
}

export default FavouriteContainer;