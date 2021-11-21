import React from "react";
import { Accordion, Container } from "react-bootstrap";
import "./Faq.css";

const Faq = () => {
  return (
    <div>
      <h1 className="text-center fw-bolder mt-5 faq-h1">FAQ</h1>
      <hr className="hr-1" />
      <hr className="hr-2" />
      <h4 className="text-center my-3">
        frequently asked questions, get knowledge befere hand
      </h4>
      <Container>
        <Accordion defaultActiveKey="">
          <Accordion.Item className="accordion my-3" eventKey="0">
            <Accordion.Header>What are the main features?</Accordion.Header>
            <Accordion.Body>
              <b>Lorem ipsum dolor sit amet</b>, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="accordion my-3" eventKey="1">
            <Accordion.Header>
              Do i have to pay again after trial
            </Accordion.Header>
            <Accordion.Body>
              <b>Lorem ipsum dolor sit amet</b>, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="accordion my-3" eventKey="2">
            <Accordion.Header>
              How can I get started after trial?
            </Accordion.Header>
            <Accordion.Body>
              <b>Lorem ipsum dolor sit amet</b>, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="accordion my-3" eventKey="3">
            <Accordion.Header>
              Can I be refunded if am not satisfied?
            </Accordion.Header>
            <Accordion.Body>
              <b>Lorem ipsum dolor sit amet</b>, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default Faq;
