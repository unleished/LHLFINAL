import React, { Component } from "react";
import "./App.css";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class Nav extends Component {
  state = { products: [] };

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/products")
      .then(res => res.json())
      .then(products => this.setState({ products }));
  }

  render() {
    return (
      <nav id="nav-bar" className="navbar navbar-expand-lg navbar-light bg-light">
        <img className="logo" src="images/tryitlogo.png"/>
        <span className="navbar-brand header" href="#">Vyo͞o</span>
          <ul className="navbar-nav">
            <li className="nav-item active">
             <NavLink to="/"> Home </NavLink>
            </li>
            <li className="nav-item">
             <NavLink to="/products"> Product </NavLink>
            </li>
          </ul>

      </nav>

    );
  }
}

export default Nav;