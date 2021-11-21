import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Getstarted.css";

const Getstarted = () => {
  return (
    <div className="getstarted-div">
      <h1 className="getstarted-h1 text-center fw-bolder mt-5">Get Started</h1>
      <hr className="hr-1" />
      <hr className="hr-2" />
      <p className="text-center my-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero illum
        architecto modi.
      </p>
      <Container className="getstarted-container">
        <Row>
          <Col className="left-side p-5" sm={12} md={6} lg={6}>
            <h1 className="getstarted-h1 fw-bolder">
              100% Satisfaction Guaranteed
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              alias optio minima, tempore architecto sint ipsam dolore tempora
              facere laboriosam corrupti!
            </p>
            <h3>What will be the next step?</h3>
            <p className="my-1">
              <i className="me-2 fas fa-check"></i>We'll prepare the proposal.
            </p>
            <p className="my-0">
              <i className="me-2 fas fa-check"></i>we'll discuss it together.
            </p>
            <p className="my-1">
              <i className="me-2 fas fa-check"></i>let's start the discussion.
            </p>
          </Col>
          <Col className="bg-white p-5" sm={12} md={6} lg={6}>
            <h2 className="gettingstarted-h2">Start Your Project</h2>
            <form>
              <Row className="text-center">
                <Col className="mb-3" sm={12} md={6} lg={6}>
                  <input
                    className="getstarted-input"
                    placeholder="First Name"
                    type="text"
                  />
                </Col>
                <Col className="mb-3" sm={12} md={6} lg={6}>
                  <input
                    className="getstarted-input"
                    placeholder="Last Name"
                    type="text"
                  />
                </Col>
                <Col className="mb-3" sm={12} md={12} lg={12}>
                  <input
                    className="getstarted-input"
                    placeholder="Your Email"
                    type="text"
                  />
                </Col>
                <Col className="mb-3" sm={12} md={12} lg={12}>
                  <textarea
                    className="getstarted-input"
                    placeholder="Message"
                    rows="7"
                  ></textarea>
                </Col>
              </Row>
            </form>
            <button className="getstarted-btn">
              Submit<i className="ms-1 fas fa-location-arrow"></i>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Getstarted;
