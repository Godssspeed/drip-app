import React, { Component } from "react";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ link, loggedIn, logout, user }) => {
  console.log(loggedIn);
  return (
    <div className="header">
      {user && user.username ? (
        <Link to="/">
          <span className="btn header-btn" onClick={() => logout()}>
            Logout
          </span>
        </Link>
      ) : (
        <Link className="login" to="/">
          Login/Register
        </Link>
      )}
    </div>
  );
};

export default Header;
