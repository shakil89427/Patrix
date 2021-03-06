import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Trusted.css";
import AOS from "aos";
import "aos/dist/aos.css";
import company_1 from "../../images/campanies/campany-1.png";
import company_2 from "../../images/campanies/campany-2.png";
import company_3 from "../../images/campanies/campany-3.png";
import company_4 from "../../images/campanies/campany-4.png";
import company_5 from "../../images/campanies/campany-5.png";
import company_6 from "../../images/campanies/campany-6.png";

const Trusted = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <h4 data-aos="fade-up" className="text-center mb-3">
        Trusted by campanies like
      </h4>
      <hr className="hr-1" />
      <hr className="hr-2" />
      <Container className=" my-5 pb-5 mx-auto">
        <Row>
          <Col
            data-aos="fade-up"
            className="trusted-img-col text-center"
            sm={12}
            md={4}
            lg={2}
          >
            <img className="trusted-img" src={company_1} alt="" />
          </Col>
          <Col
            data-aos="fade-up"
            className="trusted-img-col text-center"
            sm={12}
            md={4}
            lg={2}
          >
            <img className="trusted-img" src={company_2} alt="" />
          </Col>
          <Col
            data-aos="fade-up"
            className="trusted-img-col text-center"
            sm={12}
            md={4}
            lg={2}
          >
            <img className="trusted-img" src={company_3} alt="" />
          </Col>
          <Col
            data-aos="fade-up"
            className="trusted-img-col text-center"
            sm={12}
            md={4}
            lg={2}
          >
            <img className="trusted-img" src={company_4} alt="" />
          </Col>
          <Col
            data-aos="fade-up"
            className="trusted-img-col text-center"
            sm={12}
            md={4}
            lg={2}
          >
            <img className="trusted-img" src={company_5} alt="" />
          </Col>
          <Col
            data-aos="fade-up"
            className="trusted-img-col text-center"
            sm={12}
            md={4}
            lg={2}
          >
            <img className="trusted-img" src={company_6} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trusted;
