import React, { Component } from "react";
import "./App.css";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class Home extends Component {
  state = { products: [] };

  render() {
    return (
      <p>Home page splash</p>
    );
  }
}

export default Home