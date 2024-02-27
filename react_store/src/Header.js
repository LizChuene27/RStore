import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';
import logo from './logo192.png';

function Header({ loggedIn }) {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <Image src={logo} height='80' width='80' alt="Logo" className="mr-3" />
          <span className="fw-bold">My React Tea and Coffee Store</span>
        </Navbar.Brand>
        <Nav className="ms-auto">
          {loggedIn ? (
            <Navbar.Text>Welcome, User!</Navbar.Text>
          ) : (
            <>
              <Nav.Link href="/login">Sign In</Nav.Link>
              <Nav.Link href="/signup">Register</Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;

