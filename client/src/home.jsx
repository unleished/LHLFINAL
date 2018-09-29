import React, { Component } from "react";
import "./App.css";
import { NavLink , Redirect} from "react-router-dom";
import GridProduct from "./gridproduct";


class Home extends Component {
  constructor(props){
    super(props);
    this.state = { images: [] }
  }

  getProducts(){
    let url = `/api/v1/images`;
    fetch(url)
    .then(res => res.json())
    .then(images => { this.setState({ images })})
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
    <div>
      <ul>{this.generateList()}</ul>

    </div>
    );
  }
}


export default Home;
