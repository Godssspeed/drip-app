import React, { Component } from "react";
import Header from "./components/Header/Header";
import routes from "./components/routes";
import "./reset.css";
import "./App.css";

class App extends Component {
  render() {
    return <div className="App">{routes}</div>;
  }
}

export default App;
