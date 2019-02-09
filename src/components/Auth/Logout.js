import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../ducks/authReducer";

class Logout extends Component {
  clearInputs = () => {
    this.setState({ username: "", password: "" });
  };

  handleLogout = () => {
    this.props.logout();
    this.clearInputs();
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <span className="btn logut-btn" onClick={this.handleLogout}>
          Logout
        </span>
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
  { logout }
)(Logout);
