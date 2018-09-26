  import React, { Component } from "react";
import "./App.css";
import "./App.js";

// let productsRouter = require('./routes/api/v1/products');

class ProductContainer extends React.Component {
  constructor(props){
    super(props);
    this.product_id = this.props.match.params.id;
    this.product_name='';
    this.product_description='';
    }
    
  state = { products: [] };
  getProducts(){
    fetch("http://localhost:3001/api/v1/products")
    
    .then(res => res.json())
    .then(products => { this.setState({ products })})
  }
  
  componentDidMount() {
    this.getProducts();
    
  }
  
  render(){
    for (let x = 0; x < this.state.products.length; x++){
      if(this.state.products[x].id == this.props.match.params.id){
        this.product_name = this.state.products[x].name;
        break;
      }
    }
    for (let x = 0; x < this.state.products.length; x++){
      if(this.state.products[x].id == this.props.match.params.id){
        this.product_description = this.state.products[x].description;
        break;
      }
    }


    return (
      <div>
    <section id="product-container">
      {/* <img src={product_image1}/>                                                                                                                                                                                                                                                                                                                              */}
        <div>

        </div>
     </section>
     <section id="product-description">
        <h3>{this.product_name}</h3>
        <p id="text-description">
          {this.product_description}
        </p>
        <img className="qrcode" src="http://api.qrserver.com/v1/create-qr-code/?data=http://10.110.105.16:8000&size=10X10"/>
        <p>Check it out in AR!</p>
     </section>
     </div>
     );
  }
}


export default ProductContainer;