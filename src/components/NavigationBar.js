import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Auth } from "aws-amplify";
import { connect } from "react-redux";
import { updateUserInfo } from "../redux/action/Authentication";
import { withRouter } from "react-router-dom";
class NavigationBar extends Component {
  constructor(props) {
    super(props);
  }

  handleLogout = async event => {
    await Auth.signOut();

    this.props.dispatch(updateUserInfo(null));
    this.props.history.push("/login");
  };

  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar-default"
        variant="dark"
      >
        <Navbar.Brand href="/home">
          <img
            src={require("../assets/bitorb.jpg")}
            height="45"
            className=" align-top"
            alt="BitOrb logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          {this.props.user !== null ? (
            <Nav>
              <NavDropdown title={this.props.user.username} id="basic-nav-dropdown">
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={this.handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link style={{ color: "white" }} href="/Login">
                Login
              </Nav.Link>
              <Nav.Link style={{ color: "white" }} href="/Signup">
                Register
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.userInfo
  };
};
export default withRouter(connect(mapStateToProps)(NavigationBar));
