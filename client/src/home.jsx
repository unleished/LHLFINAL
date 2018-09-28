import React, { Component } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import GridProduct from "./gridproduct";
import Category from "./Category";

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
    <NavLink to={"/products/" + image.product_id}> <GridProduct key={image.id} image={image.path_1} /> </NavLink>);
    return list;

  }
   componentDidMount() {
    this.getProducts();
  };
//   componentWillMount(){
//     if(this.Auth.loggedIn())
//         this.props.history.replace('/');
// }
render(){
    return (
      <ul>{this.generateList()}</ul>


    );
  }
}


export default Home
