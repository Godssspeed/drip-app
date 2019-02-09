import React, { Component } from "react";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import Logout from "../Auth/Logout";

class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/dashboard">Header</Link>
        <Search />
        <Link to="/explore">Explore</Link>
        <Link to="/profile">Go to Profile</Link>
        <Logout />
      </div>
    );
  }
}

export default Header;
