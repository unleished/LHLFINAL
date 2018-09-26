import React, { Component } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import GridProduct from "./gridproduct";

class Home extends Component {
  constructor(props){
    super(props);
    this.state = { images: [] }
  }

  getProducts(){
    fetch(`/api/v1/images`)

    .then(res => res.json())
    .then(images => { this.setState({ images })})
    console.log(this.state.images)
  }

  generateList(){

    const images = this.state.images;
    const list = images.map((image)=>
    <NavLink to={"/products/" + image.product_id}> <GridProduct image={image.path_1} /> </NavLink>);
    return list;

  }
   componentDidMount() {
    this.getProducts();
  };
render(){
    return (
      <ul>{this.generateList()}</ul>


    );
  }
}


export default Home
