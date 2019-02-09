import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { register } from "../../ducks/authReducer";

class Register extends Component {
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
    this.props.register(username, password);
    this.clearInputs();
    this.props.history.push("/dashboard");
  };

  render() {
    console.log(this.props.user);
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
          <button>Register</button>
        </form>
        {/* <Link to="/dashboard">
          <span className="btn register-btn">Register</span>
        </Link> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state.user;
  return {
    user
  };
};

export default connect(
  mapStateToProps,
  { register }
)(Register);
