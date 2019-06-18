import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "../constant/css/Login.css";
import "../constant/css/Layout.css";
import { Auth } from "aws-amplify";

export default class ProfilePage extends Component {
  componentDidMount() {
    console.log(this.props.user);
  }

  render() {
    return (
      <div className="Login">
        <h1 className="generalHeader"> Profile </h1>

        <Button> Use MFA</Button>
      </div>
    );
  }
}
