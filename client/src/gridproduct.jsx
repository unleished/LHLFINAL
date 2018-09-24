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
      <div className="container">
      <div className="row text-center text-lg-left">
        <div className="col-lg-3 col-md-4 col-xs-6">
          <a href="#" className="d-block mb-4 h-100">
            <img className="img-fluid img-thumbnail" src={"" + imageURL} alt=""/>
          </a>
        </div>
      </div>
    </div>


    );
  }


export default GridProduct

