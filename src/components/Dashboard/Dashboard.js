import React, { Component } from "react";
import Post from "../Post/Post";
import Header from "../Header/Header";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        Dashboard
        <Post />
      </div>
    );
  }
}

export default Dashboard;
