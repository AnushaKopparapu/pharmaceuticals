import React from "react";
import "./navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function ReactNavbar() {

  return (
    <>
      {['lg'].map((expand) => (
        <Navbar  key={expand} expand={expand} className="custom-navbar" >
          <Container fluid>
            <Navbar.Brand href="/">Pharmaceuticals</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Pharmaceuticals
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3" >
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="./aboutus">About Us</Nav.Link>
                  <Nav.Link href="./analyticaltestingservices">Services</Nav.Link>
                  <Nav.Link href="./products">Products</Nav.Link>
                  <Nav.Link href="./career">Career</Nav.Link>
                  <Nav.Link href="./contactus">Contact Us</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default ReactNavbar;



