import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import "../styles/header.scss"


function Header() {
  return (
    <Navbar expand="sm" className="navi" >
      <Container fluid>
        <Navbar.Brand href="/">WeatherIO</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header