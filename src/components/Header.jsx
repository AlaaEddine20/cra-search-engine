import React, { Component } from "react";
import { Navbar, Nav, NavbarBrand } from "react-bootstrap";

export class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Nav>
            <NavbarBrand>Job Finder</NavbarBrand>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default Header;
