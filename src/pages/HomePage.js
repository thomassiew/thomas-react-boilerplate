import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import "../constant/css/Login.css";
import "../constant/css/Layout.css";
import { Auth } from "aws-amplify";
export default class HomePage extends Component {


  render() {
    return (
      <div className="Login">
        <h1 className="generalHeader"> HomePage </h1>

        <Button> Use MFA
        </Button>
      </div>
    );
  }
}
