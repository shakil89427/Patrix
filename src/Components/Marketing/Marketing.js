import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import service_1 from "../../images/services/service-1.png";
import "./Marketing.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Marketing = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Container>
      <Row>
        <Col
          data-aos="fade-up"
          className="text-center my-auto py-5"
          sm={12}
          md={6}
          lg={6}
        >
          <h1 className="main-color">
            <i className="fas fa-location-arrow"></i>
          </h1>
          <h1 className="main-color">Marketing</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            impedit rem, doloremque autem quibusdam blanditiis harum alias hic
            accusantium maxime atque ratione magni repellat?
          </p>
          <button className="mx-auto marketing-btn p-2 rounded-pill mt-4 d-flex align-items-center">
            <p className="fw-bolder m-0 ps-2">Learn More</p>
            <i className="marketing-icon text-white ms-4 p-2 rounded-circle fas fa-arrow-right"></i>
          </button>
        </Col>
        <Col data-aos="fade-up" sm={12} md={6} lg={6}>
          <img className="p-3 img-fluid float-end" src={service_1} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Marketing;
