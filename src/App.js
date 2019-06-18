import React from "react";
import "./App.css";
import Routing from "./router/Routing";
import { withRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

class App extends React.Component {
  
 

  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Routing />
      </div>
    );
  }
}
export default withRouter(App);
