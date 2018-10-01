import React, { Component } from "react";
import "./login.css";


class Login extends Component{

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(e){
  //         this.setState({
  //           [e.target.name]: e.target.value
  //             })
  // }

 handleSubmit(e){
    e.preventDefault();
    const that = this;
    let reqBody = {
      email: this.refs.email.value,
      password: this.refs.password.value,
    };

    fetch("/api/v1/users/login", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify(reqBody), // body data type must match "Content-Type" header
    })
      .then((res) => {
        if (res.status === 200) {
            window.sessionStorage.accessToken = res.token;
            that.props.setCurrentUser({id: res.id, email: reqBody.email});
        }
        else {
            alert("Invalid Email or Password");
        }
      })
    }

render(){
    return (
      <form onSubmit={this.handleSubmit} id="login">
            <div class="form-group">
              <label >Email:</label>
              <input ref="email" className="form-control" placeholder="Email Address" type="email" required="true"/>
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input ref="password" className="form-control" placeholder="Password" type="password" required="true"/>
            </div>
            <div>
              <input type="submit" value="Login"/>
            </div>
          </form>
    );
  }
}

export default Login;