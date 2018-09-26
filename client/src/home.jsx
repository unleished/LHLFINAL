import React, { Component } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import GridProduct from "./gridproduct";

class Home extends Component {
  constructor(props){
    super(props);
    this.state = { products: [] }
  }
  
  getProducts(){
    fetch(`http://localhost:3001/api/v1/products`)
    
    .then(res => res.json())
    .then(products => { this.setState({ products })})
  }
  
  generateList(){
    const images = this.state.products.images;
    const list = images.map((image)=>
    <NavLink to={"/products/" + image.product_id}> <GridProduct image={image.path_1}/> </NavLink>);
    return list;
    
  }
render(){
    return (
      <ul>{this.generateList()}</ul>


    );
  }
}


export default Home
