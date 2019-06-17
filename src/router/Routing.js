import React, { Component } from "react";
import { Route } from "react-router-dom";
import Noties from "../pages/main/Noties";
import Kanban from "../pages/main/Kanban";

class Routing extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Noties} />
        <Route path="/kanban" component={Kanban} />
      </div>
    );
  }
}

export default Routing;
