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
import Register from "./register";



class App extends Component {

constructor(){
    super();
    this.state = { user: '', loggedIn: false }
    this.setCurrentUser = this.setCurrentUser.bind(this)
    this.handleLogout = this.handleLogout.bind(this);
}

handleLogout(){
    sessionStorage.clear();
    this.setState({user: '', loggedIn: false});
    window.location.replace('/');
    console.log(this.state.user);
  }

setCurrentUser(user){
  this.setState({user: user})
}

componentWillMount(){
      if(sessionStorage.getItem('token') != null){
          this.setState({loggedIn: true});
      }
      else{
          this.setState({loggedIn: false});
      }
  }

  render() {
    return (
    <div className="container-fluid">
     <BrowserRouter>
      <div>
       <Nav user={this.state.user} loggedIn={this.state.loggedIn}/>
        <Switch>
          <Route exact path="/" component={() => <Home />}/>
          <Route path="/categories/:category" component ={(props) => <Category {...props} />}/>
          <Route path="/products/:id" component ={(props) => <ProductContainer {...props} />}/>
          <Route path="/login" component={(props) => <Login {...props} setCurrentUser={this.setCurrentUser} />}/>
          <Route path='/logout' render={this.handleLogout} />
          <Route path='/register' component={() => <Register />}/>
        </Switch>
       </div>
      </BrowserRouter>
     <Footer />
    </div>

    );
  }
}

export default App;
