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

constructor(){
    super();
    this.state = { user: 'test' }
    this.setCurrentUser = this.setCurrentUser.bind(this)
}

setCurrentUser(user){
  this.setState({user: user})
}

  render() {
    return (
    <div className="container">
      <BrowserRouter>
      <div>
      <Nav user={this.state.user}/>
        <Switch>
          <Route exact path="/" component={() => <Home />}/>
          <Route path="/products/:id" component ={(props) => <ProductContainer {...props} />}/>
          <Route path="/login" component={(props) => <Login {...props} setCurrentUser={this.setCurrentUser} />}/>
        </Switch>
        </div>
      </BrowserRouter>
      <Footer />

    </div>

    );
  }
}

export default App;