import React, { Component } from "react";
import { withRouter } from "react-router";

import Header from "./header";
import DJE from "../components/auth/Dje";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import Carousels from "./Carousels";
import Protected from "./auth/Protected";

class Main extends Component {
  render() {
    return (
      <div className="parent">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Protected cmp={Carousels} />
            </Route>
            <Route exact path="/DJE">
              <Protected cmp={DJE} />
            </Route>
            <Route exact path="/login" component={Login} />{" "}
            <Route exact path="/signUp" component={SignUp} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withRouter(Main);
