import React, { Component } from "react";
import "./App.css";
import {
  NavLink,
} from "react-router-dom";

function Nav (props) {

    return (
      <nav id="nav-bar" className="navbar navbar-expand-lg navbar-light bg-light">
        <img className="logo" alt="" src="/images/tryitlogo.png"/>
        <span className="navbar-brand header" href="#">Vyo͞o</span>
          <ul className="navbar-nav">
            <li className="nav-item active">
             <NavLink to="/"> Home </NavLink>
            </li>
            <li className="nav-item">
             <NavLink to="/products"> Chairs </NavLink>
            </li>
            <li className="nav-item">
             <NavLink to="/products"> Lighting </NavLink>
            </li>
            <li className="nav-item">
             <NavLink to="/products"> Tables </NavLink>
            </li>
            <li className="nav-item">
             <NavLink to="/products"> Search </NavLink>
            </li>
            <li className="nav-item">
             <NavLink to="/products"> About Us </NavLink>
            </li>
          </ul>

      </nav>

    );

}

export default Nav;