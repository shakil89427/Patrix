import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  const flexStyleTop =
    "my-3 d-flex align-items-center justify-content-sm-start justify-content-md-center  justify-content-lg-center";

  return (
    <div className="footer-bg">
      <Container>
        <Row className="text-white contact-row">
          <Col className={flexStyleTop} sm={12} md={4} lg={4}>
            <i class="me-3 fas fa-phone-alt"></i>
            <div className="">
              <h5>+1 7283654**</h5>
              <p>Mon-Fri 9am-6pm</p>
            </div>
          </Col>
          <Col className={flexStyleTop} sm={12} md={4} lg={4}>
            <i class="me-3 far fa-envelope"></i>
            <div className="">
              <h5>info@company.com</h5>
              <p>Online support</p>
            </div>
          </Col>
          <Col className={flexStyleTop} sm={12} md={4} lg={4}>
            <i class="me-3 fas fa-map-marked-alt"></i>
            <div className="">
              <h5>New York, USA</h5>
              <p>NY 10012, US</p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="connect py-4 d-flex flex-column align-items-center justify-content-center">
        <p className="text-white mb-2">Connect with us on social media</p>
        <p className="connect-icon">
          <i class="fab fa-facebook"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-github"></i>
          <i class="fab fa-linkedin-in"></i>
          <i class="fab fa-instagram"></i>
        </p>
      </div>
      <div className="footer-details">
        <Container>
          <Row className="pt-4 text-white">
            <Col className="mb-4 pe-5" sm={12} md={6} lg={6}>
              <h4>Campany Name</h4>
              <hr className="w-25" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                ex obcaecati blanditiis reprehenderit ab mollitia voluptatem
                consectetur?
              </p>
            </Col>
            <Col className="mb-4" sm={12} md={6} lg={2}>
              <h4>Products</h4>
              <hr className="w-25" />
              <p>Lorem ipsum</p>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum</p>
            </Col>
            <Col className="mb-4" sm={12} md={6} lg={2}>
              <h4>Useful Links</h4>
              <hr className="w-25" />
              <p>Your Account</p>
              <p>Become an Affiliate</p>
              <p>create an account</p>
              <p>Help</p>
            </Col>
            <Col className="mb-4" sm={12} md={6} lg={2}>
              <h4>Contact</h4>
              <hr className="w-25" />
              <p>Lorem ipsum</p>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="text-center text-white py-5">
        <p>© Copyright 2021 Company | Created by Shakil</p>
        <p>Distributed by ThemeWagon</p>
      </div>
    </div>
  );
};

export default Footer;
