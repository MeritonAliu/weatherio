import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import "../styles/header.scss"


function Header() {
  return (
    <Navbar expand="sm" className="navi" >
      <Container fluid>
        <Navbar.Brand href="/">WeatherIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">City</Nav.Link>
            <Nav.Link href="/worldview">Worldview</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header