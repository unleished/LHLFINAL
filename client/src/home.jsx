import React, { Component } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import GridProduct from "./gridproduct";
import Category from "./Category";
import Nav from "./nav";

class Home extends Component {
render(){
    return (
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-white">
        <div className="jumbotron">
          <div>
            <h1 className="hplogoname">vyo͞o</h1>
            <p className="lead">Furniture that's meant to be seen.</p>
          </div>
        </div>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <h1>Chairs</h1>
            <div>
              <img className="hpSmallImg" src="https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3808d63c2a6908695694f8911e8eeb71&auto=format&fit=crop&w=1050&q=80"/>
            </div>
        </div>
          <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <h1>Shop Lights</h1>
            <div>
              <img className="hpSmallImg" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-0.3.5&s=f87dc38567d3b8da7f1f84afe01b6316&auto=format&fit=crop&w=1050&q=80"/>
            </div>
          </div>
        </div>

    </div>


    );
  }
}


export default Home