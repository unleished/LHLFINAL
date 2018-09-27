import React, { Component } from "react";
import "./App.css";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";


function GridProduct (props) {

const imageURL = props.image
console.log("grid product" + imageURL);

    return (
      <div>
        <a href="#" className="d-block mb-4 h-100">
          <img id="gallery" className="img-fluid img-thumbnail" src={"" + imageURL} alt=""/>
        </a>
      </div>
    );
  }


export default GridProduct

