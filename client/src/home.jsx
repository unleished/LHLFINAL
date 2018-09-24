import React, { Component } from "react";
import "./App.css";

import GridProduct from "./gridproduct";

function Home (props) {


const images = props.images;
const list = images.map((image)=>

  <GridProduct image={image.path_1} /> );

    return (
      <ul>{list}</ul>


    );
  }


export default Home
