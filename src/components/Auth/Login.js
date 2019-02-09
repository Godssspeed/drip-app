import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../ducks/authReducer";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  clearInputs = () => {
    this.setState({ username: "", password: "" });
  };

  handleSubmit = e => {
    const { username, password } = this.state;
    e.preventDefault();
    this.props.login(username, password);
    this.clearInputs();
    this.props.history.push("/dashboard");
  };

  render() {
    console.log(this.state);
    console.log(this.props.user);
    // if (this.props.username) {
    //   return <Redirect push to="/dashboard" />;
    // }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.username}
            type="username"
            name="username"
            placeholder="username"
            onChange={this.handleChange}
          />
          <input
            value={this.state.password}
            type="password"
            name="password"
            placeholder="password"
            autoComplete="new-password"
            onChange={this.handleChange}
          />
          <span className="btn login-btn" onClick={this.handleSubmit}>
            Login
          </span>
        </form>
        {/* <Link to="/dashboard">
          <span className="btn login-btn">Login</span>
        </Link> */}
        {/* <Link to="/register">
          <span className="btn register-btn">Register</span>
        </Link> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state;

  return {
    user
  };
};

export default connect(
  mapStateToProps,
  { login }
)(Login);
