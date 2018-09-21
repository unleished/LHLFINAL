import React, { Component } from "react";
import "./App.css";

class Nav extends Component {
  state = { products: [] };

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/products")
      .then(res => res.json())
      .then(products => this.setState({ products }));
  }

  render() {
    return (
      <nav id="nav-bar">
        <img class="logo" src="images/tryitlogo.png">
        <div id="nav-text">
          <span class="header">Try-it!</span>
        </div>
      </nav>
    );
  }
}

export default Nav;