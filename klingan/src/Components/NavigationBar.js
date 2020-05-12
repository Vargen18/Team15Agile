import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";

class NavigationBar extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">ICA Klingan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/kund">Kund</Nav.Link>
            <Nav.Link href="/handlare">Handlare</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <a href="/kassa">Gå till kassan</a>
        <i class="material-icons-outlined"> {/* This should also redirect to the kassa */}
          shopping_cart
        </i>
      </Navbar>
    );
  }
}

export default NavigationBar;
