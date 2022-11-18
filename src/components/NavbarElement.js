import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarElement = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light" className='d-flex flex-column' style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
        <Container fluid style={{fontFamily: "serif"}}>
          <Navbar.Brand href="#home" style={{fontFamily: "serif", fontWeight: "bold", fontSize: "24px"}}>The Parentings</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#Artikel">Artikel</Nav.Link>
              <Nav.Link href="#ForumDiskusi">Forum Diskusi</Nav.Link>
              <Button variant="light" className="ms-3 buttonNav">
                Masuk
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarElement;