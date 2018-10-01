import React, { Component } from "react";
import "./register.css";


class Register extends Component{

  constructor(s){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { user: [], token: '' }
  }
  verifyToken(){

  }
  handleChange(e){
          this.setState({
            [e.target.name]: e.target.value
              })
  }
  handleSubmit(e){
    e.preventDefault();
    let reqBody = {
      email: this.refs.email.value,
      password: this.refs.password.value,
      confirmPassword: this.refs.confirmPassword.value
    };
    fetch("/api/v1/users/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(reqBody)
    })
      .then((res) => {
        if (res.ok){
          redirect: window.location.replace("./home.html")
          return res.json();
        } else {
          throw new Error ('Something went wrong with your fetch');
        }
      })
  }


render(){
    return (
           <form onSubmit={this.handleSubmit} className="signup-form">
            <div>
              <label >Email:</label>
              <input ref="email" type="text" required="true"/>
            </div>
            <div>
              <label>Password:</label>
              <input ref="password" type="password" required="true"/>
            </div>
            <div>
              <label>Confirm:</label>
              <input ref="confirmPassword" type="password" required="true"/>
            </div>
            <div>
              <input type="submit" value="Register"/>
            </div>
          </form>
    );
  }
}

export default Register;