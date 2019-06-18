import React, { Component } from "react";
import { FormGroup, FormControl, FormLabel, HelpBlock } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import { Auth } from "aws-amplify";
import "../constant/css/Signup.css";
import "../constant/css/Layout.css";
export default class RegistrationPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: "",
      username: "",
      confirmationCode: "",
      newUser: null
    };
  }

  componentDidMount() {
    if (this.props.isAuthenticated) {
      
      this.props.history.push("/home");
    }
  }
  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.username.length > 0
    );
  }

  validateConfirmationForm() {
    return this.state.confirmationCode.length > 0;
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
      console.log("wut");
      console.log(this.state.email);
      const newUser = await Auth.signUp({
        username: this.state.username,
        password: this.state.password,
        attributes: {
          email: this.state.email
        }
      });
      this.setState({
        newUser
      });
    } catch (e) {
      alert(e.message);
    }

    this.setState({ isLoading: false });
  };

  handleConfirmationSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    try {
      await Auth.confirmSignUp(
        this.state.username,
        this.state.confirmationCode
      );
      await Auth.signIn(this.state.username, this.state.password);

      this.props.userHasAuthenticated(true);
      this.props.history.push("/");
    } catch (e) {
      alert(e.message);
      this.setState({ isLoading: false });
    }
  };

  renderConfirmationForm() {
    return (
      <form onSubmit={this.handleConfirmationSubmit}>
        <FormGroup controlId="confirmationCode" bsSize="large">
          <FormLabel>Confirmation Code</FormLabel>
          <FormControl
            autoFocus
            type="tel"
            value={this.state.confirmationCode}
            onChange={this.handleChange}
          />
          <FormLabel>Please check your email for the code.</FormLabel>
        </FormGroup>
        <LoaderButton
          block
          bsSize="large"
          disabled={!this.validateConfirmationForm()}
          type="submit"
          isLoading={this.state.isLoading}
          text="Verify"
          loadingText="Verifying…"
        />
      </form>
    );
  }
  renderForm() {
    return (
      <form  onSubmit={this.handleSubmit}>
        <FormGroup controlId="username">
          <FormLabel className="generalFormLabel">Username</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="email">
          <FormLabel className="generalFormLabel">Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={this.state.email}
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
    );
  }

  render() {
    return (
      <div className="Signup">
        <h1 className="generalHeader">Sign Up</h1>

        {this.state.newUser === null
          ? this.renderForm()
          : this.renderConfirmationForm()}
      </div>
    );
  }
}
