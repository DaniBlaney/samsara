import React from 'react';
import { Nav, NavDropdown, NavItem, Navbar, NavbarBrand, NavLink, NavbarToggle, NavbarCollapse, Container, Button } from 'react-bootstrap';

const NavBarComponent = () => {
  return (<>
    <Container fluid style={{padding: 0}}>
      <Navbar className="navbar" id="custom-nav" style={{}} sticky="top" bg="light" variant="light" expand="lg">
        <Navbar.Brand href="/">
          <img
            alt=""
            src="./images/samsaralogo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {' Samsara Chiropractic Wellness Center'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-right">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About Us</Nav.Link>
          <Nav.Link href="/clinicinfo">Clinic Info</Nav.Link>
          <Nav.Link href="http://welcometowellness.blogspot.com/" target="_blank">Blog</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </>
  )
}


export default NavBarComponent;
