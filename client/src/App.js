import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { products: [] };

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/products")
      .then(res => res.json())
      .then(products => this.setState({ products }));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.products.map(product => (
          <div key={product.id}>{product.name}</div>
        ))}
      </div>
    );
  }
}

export default App;