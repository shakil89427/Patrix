import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <Navbar id="top" collapseOnSelect expand="lg" className="navbar">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="text-center" id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex flex-sm-row align-items-center">
            <Nav.Link className="text-white fw-bolder me-2" href="#services">
              Services
            </Nav.Link>
            <Nav.Link
              className="text-white fw-bolder me-2"
              href="#testimonials"
            >
              Testimonials
            </Nav.Link>
            <Nav.Link className="text-white fw-bolder me-2" href="#faq">
              Faq
            </Nav.Link>

            <Nav.Link className="text-white fw-bolder me-2" href="#contact">
              Contact
            </Nav.Link>
            <button className="mx-auto nav-button p-2 rounded-pill border border-2 d-flex align-items-center">
              <p className="fw-bolder m-0">+1 71238538**</p>
              <i className="nav-button-icon ms-4 text-white p-2 rounded-circle fas fa-phone-alt"></i>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
