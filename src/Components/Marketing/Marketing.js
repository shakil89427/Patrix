import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import service_1 from "../../images/services/service-1.png";
import "./Marketing.css";

const Marketing = () => {
  return (
    <div>
      <Container className="my-5">
        <Row>
          <Col className="my-auto py-5" sm={12} md={6} lg={6}>
            <h1 className="main-color">
              <i class="fas fa-location-arrow"></i>
            </h1>
            <h1 className="main-color">Marketing</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              impedit rem, doloremque autem quibusdam blanditiis harum alias hic
              accusantium maxime atque ratione magni repellat?
            </p>
            <button className="marketing-btn p-2 rounded-pill mt-4 d-flex align-items-center">
              <p className="fw-bolder m-0 ps-2">Learn More</p>
              <i className="marketing-icon text-white ms-4 p-2 rounded-circle fas fa-arrow-right"></i>
            </button>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <img className="img-fluid float-end" src={service_1} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Marketing;
