import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "./nav.css";
import "./index.css";
import {
  Route,
  Switch,
  NavLink,
  BrowserRouter
} from "react-router-dom";

import ProductContainer from "./productcontainer";
import Nav from "./nav";
import Home from "./home";
import Footer from "./footer";

class App extends Component {



  render() {

    return (
    <div className="container">

      <BrowserRouter>
      <div>
      <Nav />
        <Switch>
          <Route exact path="/" component={() => <Home />}/>
          <Route path="/products/:id" component ={(props) => <ProductContainer {...props} />}/>
        </Switch>
        </div>
      </BrowserRouter>
      <Footer />
    </div>

    );
  }
}

export default App;