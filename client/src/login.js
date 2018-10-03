import React, { Component } from "react";

import "./login.css";

class Login extends Component{

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


 handleSubmit(e){
    e.preventDefault();

    let reqBody = {
      email: this.refs.email.value,
      password: this.refs.password.value,
    };

    fetch("/api/v1/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(reqBody),
    })
      .then((res) => {
        if (res.status === 200) {
            let temporary = res.json();
            window.localStorage.setItem('access_token', res.token);
            this.props.setCurrentUser({id: res.id, email: reqBody.email});
            window.location.replace("./")
        }
        else {
            alert("Invalid Email or Password");
        }
      })
    }

render(){
    return (
      <div id="wrapper">
      <form onSubmit={this.handleSubmit} id="login" className="justify-content-center">
            <div className="d-inline-flex flex-column justify-content-center">
              <div className="p-2">
              <label>Email:</label>
              <input ref="email" className="form-control" placeholder="Email Address" type="email" required="true"/>
              </div>
              <div className="p-2">
                <label>Password:</label>
                <input ref="password" className="form-control" placeholder="Password" type="password" required="true"/>
              </div>
              <div className="p-2">
                <input type="submit" value="Login"/>
              </div>
            </div>
          </form>
        </div>
    );
  }
}

export default Login;
