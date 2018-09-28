import React, { Component } from "react";
import "./login.css";
import AuthService from './AuthService';

class Login extends Component{

  constructor(s){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.Auth = new AuthService();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(e){
          this.setState({
            [e.target.name]: e.target.value
              })
  }
   handleFormSubmit(e){
        e.preventDefault();

        this.Auth.login(this.state.username,this.state.password)
            .then(res =>{



               this.props.history.replace('/');
            })
            .catch(err =>{
                alert(err);
            })
    }

render(){
    return (
      <form className="modal-content animate" action="/action_page.php">
      <div className="container">
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required onChange={this.handleChange}/>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required/>

        <button type="submit">Login</button>
      </div>
      </form>
    );
  }
}

export default Login;