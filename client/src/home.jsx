import React, { Component } from "react";
import "./App.css";



class Home extends Component {
render(){
    return (
      <div className="position-relative overflow-hidden mx-3 text-center bg-white">
        <div className="jumbotron">
          <div>
            <h1 className="hplogoname">vyo͞o</h1>
            <p className="lead">Furniture that's meant to be seen.</p>
          </div>
        </div>
        <div className="lowerBanner d-md-flex flex-md-equal w-100 my-md-3 text-center text-white overflow-hidden">
          <div className="hpleft mr-md-3 pt-3 px-3 pt-md-5 px-md-5">
            <div className="hpBannerName p-3">
              <a href="/categories/chairs"><h1>Chairs</h1></a>
            </div>
          </div>
          <div className="hpright pt-3 px-3 pt-md-5 px-md-5">
            <div className="hpBannerName p-3">
              <a href="/categories/lighting"><h1>Lighting</h1></a>
            </div>
          </div>
        </div>

    </div>


    );
  }
}


export default Home
