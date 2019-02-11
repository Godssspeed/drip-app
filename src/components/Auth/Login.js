import React, { Component } from "react";
import Header from "../Header/Header";
import { login, register } from "../../ducks/authReducer";
import { connect } from "react-redux";
import axios from "axios";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      newUser: false
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  clearInputs = () => {
    this.setState({ username: "", password: "" });
  };

  registerUser = (e, username, password) => {
    e.preventDefault();
    this.props.register(username, password);
    this.clearInputs();
    this.props.history.push("/");
  };

  loginUser = async (e, username, password) => {
    e.preventDefault();
    const response = await this.props.login(username, password);
    console.log(response);
    this.clearInputs();
    // this.props.history.push("/home");
    // axios
    //   .get("/auth/user")
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     window.alert("Wrong Username /Password Combination");
    //   });
  };

  render() {
    const { username, password, newUser } = this.state;
    console.log(this.state);
    // console.log(this.props.user);
    // // if (this.props.username) {
    // //   return <Redirect push to="/dashboard" />;
    // // }
    return (
      <div className="login-page">
        <Header />

        <form
          className="login-form"
          onSubmit={e => {
            newUser
              ? this.registerUser(e, username, password)
              : this.loginUser(e, username, password);
          }}
        >
          <h1 className="userChange">{newUser ? "Register" : "Login"}</h1>
          <label>Username: </label>
          <input
            className="input"
            value={username}
            type="username"
            name="username"
            placeholder=" username"
            required
            onChange={e => this.handleChange(e)}
          />
          <label>Password: </label>
          <input
            className="input"
            value={password}
            type="password"
            name="password"
            placeholder=" password"
            autoComplete="new-password"
            required
            onChange={e => this.handleChange(e)}
          />
          <input className="btn submit-btn" type="submit" />
          <span
            className="btn newUser-btn"
            onClick={() => this.setState({ newUser: !newUser })}
          >
            Click here to {newUser ? "Login" : "Register"}
          </span>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ authReducer }) => ({ authReducer });

export default connect(
  mapStateToProps,
  { login, register }
)(Login);
