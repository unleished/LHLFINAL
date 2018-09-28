import React, { Component } from "react";
import "./App.css";
import "./nav.css";
import "./footer.css";
import "./index.css";
import {
  Route,
  Switch,
  BrowserRouter
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import ProductContainer from "./productcontainer";
import Nav from "./nav";
import Home from "./home";

import Footer from "./footer";
import Login from "./login";
import Category from "./Category";


class App extends Component {



  render() {

    return (
    <div className="container-fluid">
      <BrowserRouter>
        <div>
      <Nav />
        <Switch>
          <Route exact path="/" component={() => <Home />}/>
          <Route path="/categories/:category" component ={(props) => <Category {...props} />}/>
          <Route path="/products/:id" component ={(props) => <ProductContainer {...props} />}/>
          <Route path="/login" component={() =><Login />} />
        </Switch>
      </div>
      </BrowserRouter>

      <Footer />
    </div>

    );
  }
}

export default App;
