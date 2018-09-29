import React, { Component } from "react";
import "./App.css";
import { NavLink, Route } from "react-router-dom";
import GridProduct from "./gridproduct";

class Category extends Component {
  constructor(props){
    super(props);
    this.state = { images: [] }
  }

  // getAllImages(){
  //   let url = `/api/v1/images`;
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(images => { this.setState({ images })})
  //   console.log("getAllImages: ", this.state)
  //
  // }

  getImagesByCat(category){
    let url = `/api/v1/images/${category}`;
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

  componentWillReceiveProps(nextProps){
    this.getImagesByCat(nextProps.match.params.category);
  }

   componentDidMount() {
    // this.getAllImages();
    this.getImagesByCat(this.props.match.params.category);
  };

render(){
    return (
      <ul>{this.generateList()}</ul>
    );
  }
}

export default Category;
