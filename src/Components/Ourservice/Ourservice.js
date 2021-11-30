import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Ourservice.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Ourservice = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="services">
      <div data-aos="fade-up">
        <h1 className="text-center fw-bolder service-h1">Our Services</h1>
        <hr className="hr-1" />
        <hr className="hr-2" />
        <Container className="my-4">
          <Row>
            <Col
              data-aos="fade-up"
              className="text-center border-end p-3"
              sm={12}
              md={12}
              lg={6}
            >
              <h2 className="fw-bolder">
                Our Services Range From Initial Design To Deployment Anywhere
                Anytime
              </h2>
            </Col>
            <Col
              data-aos="fade-up"
              className="text-center p-3"
              sm={12}
              md={12}
              lg={6}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur architecto magni, dicta
                maxime laborum temporibus dolorem esse doloremque illo quas nisi
                enim molestias. Tempore ducimus molestiae in dolore enim.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Ourservice;
