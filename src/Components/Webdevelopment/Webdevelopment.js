import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import service_2 from "../../images/services/service-2.png";
import "./Webdevelopment.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Webdevelopment = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Container>
      <Row className="d-flex flex-column-reverse flex-md-row flex-lg-row">
        <Col data-aos="fade-up" md={6} lg={6}>
          <img className="p-3 img-fluid float-start" src={service_2} alt="" />
        </Col>
        <Col
          data-aos="fade-up"
          className="text-center my-auto py-5"
          md={6}
          lg={6}
        >
          <h1 className="main-color">
            <i className="fas fa-code"></i>
          </h1>
          <h1 className="main-color">Web Development</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            impedit rem, doloremque autem quibusdam blanditiis harum alias hic
            accusantium maxime atque ratione magni repellat?
          </p>
          <button className="mx-auto web-btn p-2 rounded-pill mt-4 d-flex align-items-center">
            <p className="fw-bolder m-0 ps-2">Learn More</p>
            <i className="web-icon text-white ms-4 p-2 rounded-circle fas fa-arrow-right"></i>
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default Webdevelopment;
