import React, { Component } from "react";
import "./App.css";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";


function GridProduct (props) {




    return (
      <div class="container">
      <div class="row text-center text-lg-left">
        <div class="col-lg-3 col-md-4 col-xs-6">
          <a href="#" class="d-block mb-4 h-100">
            <img class="img-fluid img-thumbnail" src="http://placehold.it/400x300" alt=""/>
          </a>
        </div>
      </div>
    </div>


    );
  }


export default GridProduct

