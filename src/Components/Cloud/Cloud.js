import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Cloud.css";
import service_3 from "../../images/services/service-3.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Cloud = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Container className="">
        <Row>
          <Col
            data-aos="fade-up"
            className="my-auto py-5"
            sm={12}
            md={6}
            lg={6}
          >
            <h1 className="main-color">
              <i className="fas fa-cloud-upload-alt"></i>
            </h1>
            <h1 className="main-color">Cloud Hosting</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              impedit rem, doloremque autem quibusdam blanditiis harum alias hic
              accusantium maxime atque ratione magni repellat?
            </p>
            <button className="cloud-btn p-2 rounded-pill mt-4 d-flex align-items-center">
              <p className="fw-bolder m-0 ps-2">Learn More</p>
              <i className="cloud-icon text-white ms-4 p-2 rounded-circle fas fa-arrow-right"></i>
            </button>
          </Col>
          <Col data-aos="fade-up" sm={12} md={6} lg={6}>
            <img className="img-fluid float-end" src={service_3} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cloud;
