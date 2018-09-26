import React, { Component } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import GridProduct from "./gridproduct";

function Home (props) {


const images = props.images;
const list = images.map((image)=>

  <NavLink to={"/products/" + image.product_id}> <GridProduct image={image.path_1}/> </NavLink>);

    return (
      <ul>{list}</ul>


    );
  }


export default Home
