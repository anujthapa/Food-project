import React, { Component } from "react";
import "./index.css";
import logo from "../../image/logo.png";
import Textinput from "../common/Textinput";
import Socialmedialogin from "../common/Socialmedialogin";
import Signup from "./Signupform";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser, toogleHandaler } from "../../action/authAction";
import { Link } from "react-router-dom";

class Index extends Component {
  state = {
    email: "",
    password: ""
  };

  changeHandaler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandaler = e => {
    e.preventDefault();
    const newData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(newData);
  };

  toogleHandaler = () => {
    this.props.toogleHandaler();
  };

  render() {
    const login = (
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

          <div className="login">
            <Link to="/Secondpage">
              {" "}
              <button
                type="submit"
                value="Submit"
                className="btn btn-success btn-md"
              >
                Login
              </button>
            </Link>
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
              <button
                className="btn btn-info btn-xs"
                onClick={this.toogleHandaler}
              >
                Not a member yet
              </button>
            </div>
          </div>
        </form>
      </div>
    );

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
            {this.props.auth.toogle ? (
              login
            ) : (
              <span>
                <Signup />
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }
}
Index.propTypes = {
  auth: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  toogleHandaler: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser, toogleHandaler }
)(Index);
