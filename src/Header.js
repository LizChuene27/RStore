import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './tea.jpeg';

function Header({ loggedIn }) {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <Image src={logo} height="80" width="80" alt="Logo" className="mr-3" />
          <span className="fw-bold">TC Store</span>
        </Navbar.Brand>

        <Nav className="ms-auto">
          {loggedIn ? (
            <Navbar.Text>Welcome, User!</Navbar.Text>
          ) : (
            <>
              <Nav.Link as={Link} to="/login">Sign In</Nav.Link>
              <Nav.Link as={Link} to="/signup">Register</Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
