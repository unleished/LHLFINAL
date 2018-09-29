import React, { Component } from "react";
import "./App.css";



function GridProduct (props) {

const imageURL = props.image

    return (
      <div>
        <a href="#" className="d-block mb-4 h-100">
          <img id="gallery" className="img-fluid img-thumbnail" src={"" + imageURL} alt="" />
        </a>
      </div>
    );
  }


export default GridProduct
