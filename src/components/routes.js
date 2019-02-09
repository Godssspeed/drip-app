import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./Dashboard/Dashboard";
import Profile from "./Profile/Profile";
import Explore from "./Explore/Explore";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

export default (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/profile" component={Profile} />
    <Route path="/explore" component={Explore} />
  </Switch>
);
