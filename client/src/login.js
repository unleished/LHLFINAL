import React, { Component } from "react";



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
        body: JSON.stringify(reqBody), // body data type must match "Content-Type" header
    })
      .then((res) => {
        if (res.status === 200) {
            window.sessionStorage.accessToken = res.token;
            this.props.setCurrentUser({id: res.id, email: reqBody.email});
        }
        else {
            alert("Invalid Email or Password");
        }
      })
    }

render(){
    return (

      <form onSubmit={this.handleSubmit} id="login" className="justify-content-center">
            <div className="d-inline-flex flex-column justify-content-center">
              <div className="p-2">
              <label >Email:</label>
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
    );
  }
}

export default Login;