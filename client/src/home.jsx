import React, { Component } from "react";
import "./App.css";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import GridProduct from "./gridproduct";

function Home (props) {

console.log(props.products)
const products = props.products;
// const list = products.map((product)=>
//   <GridProduct product={product.name} /> );

    return (
      <ul>{products}</ul>


    );
  }


export default Home

 // <div class="container">
 //      <div class="row text-center text-lg-left">
 //        <div class="col-lg-3 col-md-4 col-xs-6">
 //          <a href="#" class="d-block mb-4 h-100">
 //            <img class="img-fluid img-thumbnail" src="http://placehold.it/400x300" alt="">
 //          </a>
 //        </div>
 //      </div>
 //    </div>