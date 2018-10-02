import React, { Component } from "react";
import "./App.css";
import {
  NavLink
} from "react-router-dom";




function Nav (props){

let user = '';
let link = '';
let text = '';
  if(!props.user.email){
      user = 'Guest';
      link = '/login';
      text = 'Login';
  }else{
      user = props.user.email;
      link = '/logout';
      text = 'Logout';
  }



    return (
      <div className="nav-bar d-flex-row align-items-center">
        <nav id="nav-bar" className="d-flex row align-items-center">
          <a href="/"><img className="logo" alt="" src="/images/tryitlogo.png"/></a>
            <ul className="m-0">
              <li className="nav-item active">
               <NavLink to="/"> Home </NavLink>
              </li>
              <li className="nav-item">
               <NavLink to="/categories/chairs"> Chairs </NavLink>
              </li>
              <li className="nav-item">
               <NavLink to="/categories/lighting"> Lighting </NavLink>
              </li>
              <li className="nav-item">
               <NavLink to="/categories/tables"> Tables </NavLink>
              </li>
              <li className="nav-item">
               <NavLink to="/search"> Search </NavLink>
              </li>
              <li className="nav-item">
               <NavLink to="/about"> About Us </NavLink>
              </li>
              <li className="nav-item right">
                Welcome, {user}! <NavLink to={link}> {text} </NavLink>
              </li>
               <li className="nav-item">
               <NavLink to="/register"> Register</NavLink>
              </li>
            </ul>
      </nav>
    </div>

    );
}


export default Nav;
