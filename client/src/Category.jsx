import React, { Component } from "react";
import "./App.css";
import { NavLink, Route } from "react-router-dom";
import GridProduct from "./gridproduct";

class Category extends Component {
  constructor(props){
    super(props);
    this.state = { images: [] }
  }

  getImagesByCat(category){
    let url = `/api/v1/images/${category}`;
    fetch(url)
    .then(res => res.json())
    .then(images => { this.setState({ images })})

  }

  generateList(){
    const images = this.state.images;
    const list = images.map((image)=>
    <NavLink to={"/products/" + image.product_id}> <GridProduct key={image.id} image={image.path_1} name={image.name} /> </NavLink>);
    return list;
  }

  componentWillReceiveProps(nextProps){
    this.getImagesByCat(nextProps.match.params.category);
  }

   componentDidMount() {
    this.getImagesByCat(this.props.match.params.category);
  };

  capitalizeCatName(name){
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

render(){
  var styles = {
      height: "200px",
      backgroundColor: "black",
      borderRadius: ".3rem",
      backgroundImage: `url(../images/catbanners/${this.props.match.params.category}/1.jpeg)`,
      filter: "grayscale(100%)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
  }


    return (
      <div className="categoryPage">
        <div className="categoryHeader d-flex justify-content-center align-items-center text-white" style={styles}>
          <h1>{this.capitalizeCatName(this.props.match.params.category)}</h1>
        </div>
        <div className="category-layout my-3">
          <ul>{this.generateList()}</ul>
        </div>
      </div>

    );
  }
}

export default Category;
