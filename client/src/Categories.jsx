import React, { Component } from "react";
import "./App.css";

class Categories extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <img src="https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ca1b15fe23a56b3bb7495d6ef5d4644b&auto=format&fit=crop&w=750&q=80"/>
            <h3>Product Name</h3>
          </div>
          <div className="col">
            <img src="https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ca1b15fe23a56b3bb7495d6ef5d4644b&auto=format&fit=crop&w=750&q=80"/>

            <h3>Product Name</h3>
          </div>
          <div className="col">
            <img src="https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ca1b15fe23a56b3bb7495d6ef5d4644b&auto=format&fit=crop&w=750&q=80"/>

            <h3>Product Name</h3>
          </div>
        </div>
      </div>

    );
  }
}

export default Categories;
