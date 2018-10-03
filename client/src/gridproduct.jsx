import React, { Component } from "react";
import "./App.css";



function GridProduct (props) {

const imageURL = props.image

    return (
      <div className="catItemDetails d-flex flex-column align-items-center">
        <a href="#" className="d-block mb-4 h-100">
          <img id="gallery" className="img-fluid img-thumbnail" src={"" + imageURL} alt="" />
        </a>
        <h2 className="productTitle">{props.name}</h2>
        <h4>${props.price}.00</h4>

      </div>
    );
  }


export default GridProduct
