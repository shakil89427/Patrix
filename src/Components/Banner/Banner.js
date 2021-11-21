import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../images/arts/intro-section-illustration.png";
import "./Banner.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        id="home"
        className="banner-bg pt-4"
      >
        <Container>
          <Row>
            <Col className="text-white my-auto py-4" sm={12} md={6} lg={6}>
              <h1 className="banner-h1 mb-4">Hey!, I'm ******</h1>
              <h5>
                this is a multi-purpose responsive layout created with bootstrap
                v5. (here your can place your description text)
              </h5>
              <button className="banner-btn p-2 rounded-pill mt-4 border border-2 d-flex align-items-center">
                <p className="fw-bolder m-0 ps-2">Get in Touch</p>
                <i className="banner-icon text-white ms-4 p-2 rounded-circle fas fa-arrow-right"></i>
              </button>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <img className="float-end img-fluid" src={logo} alt="" />
            </Col>
          </Row>
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,128L60,133.3C120,139,240,149,360,144C480,139,600,117,720,96C840,75,960,53,1080,58.7C1200,64,1320,96,1380,112L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Banner;
