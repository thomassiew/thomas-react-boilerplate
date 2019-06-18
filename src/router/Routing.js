import React from "react";
import { Route, Switch } from "react-router-dom";

import RegistrationPage from "../pages/RegistrationPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";

class Routing extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={RegistrationPage} />
      </Switch>
    );
  }
}
export default Routing;
