import React, { Component } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import GridProduct from "./gridproduct";
import Category from "./Category";
import Nav from "./nav";

class Home extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = { images: [] }
  // }
  //
  // getProducts(){
  //   let url = `/api/v1/images`;
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(images => { this.setState({ images })})
  // }
  //
  // generateList(){
  //   const images = this.state.images;
  //   const list = images.map((image)=>
  //   <NavLink to={"/products/" + image.product_id}> <GridProduct key={image.id} image={image.path_1} /> </NavLink>);
  //   return list;
  //
  // }
  //  componentDidMount() {
  //   this.getProducts();
  // };
//   componentWillMount(){
//     if(this.Auth.loggedIn())
//         this.props.history.replace('/');
// }
render(){
    return (
      <div className="homePage">
        <h1>THIS IS A HOMEPAGE BANNER</h1>
        <h2>THIS IS A CHAIR IMAGE</h2>
        <h2>THIS IS A PLANT IMAGE</h2>
      </div>
      // <ul>{this.generateList()}</ul>


    );
  }
}


export default Home
