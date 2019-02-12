import React, { Component } from "react";
import Textinput from "../common/Textinput";

class Signupform extends Component {
  state = {
    email: "",
    name: "",
    password: "",
    password2: ""
  };
  changeHandaler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandaler = e => {
    console.log(this.state);
  };

  render() {
    const onClick = "";
    return (
      <div>
        <div className="inputfields form-group">
          <form onSubmit={this.submitHandaler}>
            <Textinput
              placeholder="Enter your Name"
              value={this.state.name}
              name="name"
              type="text"
              onChange={this.changeHandaler}
              className="form-control"
            />
            <Textinput
              placeholder="Enter your email"
              value={this.state.email}
              name="email"
              type="email"
              onChange={this.changeHandaler}
              className="form-control"
            />
            <Textinput
              type="password"
              name="password"
              value={this.state.password}
              placeholder="Enter your Password"
              className="form-control"
              onChange={this.changeHandaler}
            />
            <Textinput
              type="password2"
              name="password2"
              value={this.state.password2}
              placeholder="Enter your Password2"
              className="form-control"
              onChange={this.changeHandaler}
            />
          </form>
          <button className="btn btn-success btn-md" onClick={onClick}>
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}

export default Signupform;
