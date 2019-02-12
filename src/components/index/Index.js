import React, { Component } from "react";
import "./index.css";
import logo from "../../image/logo.png";
import Textinput from "../common/Textinput";
import Socialmedialogin from "../common/Socialmedialogin";

class Index extends Component {
  state = {
    email: "",
    password: ""
  };

  changeHandaler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="main-container">
        <div className="container">
          <div className="displaytext">
            <div className="text-content">
              <img
                className="image-circle"
                src={logo}
                style={{ height: "10vh", width: "10vh" }}
                alt="logo"
              />
              <h1>Time eat</h1>
              <h2>
                Don't think,it's
                <br /> time to eat
              </h2>
            </div>
          </div>

          <div className="displayform">
            <div className="inputfields form-group">
              <form onSubmit={this.submitHandaler}>
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
              </form>
              <div className="login">
                {" "}
                <button className="btn btn-success btn-md">Login</button>
                <div className="socialmedia">
                  {" "}
                  <Socialmedialogin
                    value="Facebook"
                    text="Enter with Facebook"
                    icon="fab fa-facebook"
                    className="btn-primary"
                  />
                  <Socialmedialogin
                    value="Google"
                    text="Enter with Google"
                    icon="fab fa-google"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Index;
