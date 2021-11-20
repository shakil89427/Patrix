import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar navbar-bg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="text-center" id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex flex-sm-row align-items-center">
            <Nav.Link className="text-white fw-bolder me-2" href="#deets">
              Home
            </Nav.Link>
            <Nav.Link className="text-white fw-bolder me-2" href="#deets">
              Services
            </Nav.Link>
            <Nav.Link className="text-white fw-bolder me-2" href="#deets">
              Testimonials
            </Nav.Link>
            <Nav.Link className="text-white fw-bolder me-2" href="#deets">
              Faq
            </Nav.Link>
            <Nav.Link className="text-white fw-bolder me-2" href="#deets">
              Portfolio
            </Nav.Link>
            <Nav.Link className="text-white fw-bolder me-2" href="#deets">
              Contact
            </Nav.Link>
            <button className="mx-auto nav-button p-2 rounded-pill border border-2 d-flex align-items-center">
              <p className="fw-bolder m-0">+1 7123853892</p>
              <i className="nav-button-icon ms-4 text-white p-2 rounded-circle fas fa-phone-alt"></i>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
