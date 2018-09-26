  import React, { Component } from "react";
import "./App.css";
import "./App.js";

// let productsRouter = require('./routes/api/v1/products');

class ProductContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = { product: [] }
  }

  getProductsbyID(id){
<<<<<<< HEAD

    fetch(`http://localhost:3001/api/v1/products`)
=======
   let url = `/api/v1/products/${id}`
    console.log("url: ", url)
    fetch(url)
>>>>>>> bug/fixRouting

    .then(res => res.json())
    .then(product => { this.setState({ product: product[0] })})
    console.log("in getproducts function " , this.state.product)
  }

  componentDidMount() {
    this.getProductsbyID(this.props.match.params.id);
    console.log("in component did mount " , this.props.match.params.id)
  };

  render(){


    return (
      <div>
    <section id="product-container">

      <img src={"" + this.state.product.path_1}/>

        <div>
        <img src={"" + this.state.product.path_2}/>
        <img src={"" + this.state.product.path_3}/>
        <img src={"" + this.state.product.path_4}/>
        </div>
     </section>
     <section id="product-description">
        <h3>{this.state.product.name}</h3>
        <p id="text-description">
          {this.state.product.description}
        </p>
        <img className="qrcode" src="http://api.qrserver.com/v1/create-qr-code/?data=http://10.110.105.16:8000&size=10X10"/>
        <p>Check it out in AR!</p>
     </section>
     </div>
     );
  }
}


export default ProductContainer;
