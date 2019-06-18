import React, { Component } from "react";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import { Auth } from "aws-amplify";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateUserInfo } from "../redux/action/Authentication";
import "../constant/css/Login.css";
import "../constant/css/Layout.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      username: "",
      password: ""
    };
  }

  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.history.push("/home");
    }
  }
  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    try {
      await Auth.signIn(this.state.username, this.state.password).then(user => {
        this.props.dispatch(updateUserInfo(user));
      });

      this.props.history.push("/");
    } catch (e) {
      alert(e.message);
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <div className="Login">
        <h1 className="generalHeader"> Login </h1>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username">
            <FormLabel className="generalFormLabel">Username</FormLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password">
            <FormLabel className="generalFormLabel">Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <LoaderButton
            block
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Login"
            loadingText="Logging in…"
          />
        </form>
      </div>
    );
  }
}

export default withRouter(connect()(LoginPage));
