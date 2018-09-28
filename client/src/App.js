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

import ProductContainer from "./productcontainer";
import Nav from "./nav";
import Home from "./home";

import Footer from "./footer";
import Login from "./login";


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