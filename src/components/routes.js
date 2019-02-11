import React from "react";
import { Switch, Route } from "react-router-dom";

// import Dashboard from "./Dashboard/Dashboard";
import Profile from "./Profile/Profile";
import Explore from "./Explore/Explore";
import Login from "./Auth/Login";
import Home from "./Home/Home";
import "../App.css";

export default (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/home" component={Home} />
    <Route path="/profile" component={Profile} />
    <Route path="/explore" component={Explore} />
  </Switch>
);
