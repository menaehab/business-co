import React from "react";
import "../style/communication.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import communicationImage from "../assets/communication.jpg";
import { Fade } from "react-awesome-reveal";

export default function Communication() {
  return (
    <Fade>
      <section className="communication">
        <Row>
          <Col className="d-flex justify-content-center flex-column" lg={6}>
            <div className="communication_text">
              <h1>We engage positive communication</h1>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <Link className="btn_communication">learn more</Link>
            </div>
          </Col>
          <Col lg={6}>
            <img
              src={communicationImage}
              alt="communicationImage"
              className="communication_image"
            />
          </Col>
        </Row>
        <div className="communication_letter">
          <Container>
            <Row>
              <Col lg={8}>
                <div className="communication_letter_text">
                  <h2>Get to know today!</h2>
                  <p>
                    ullam mauris nibh, pellentesque quis tincidunt eu, tincidunt
                    sed nulla, sit amet tristique elit finibus.
                  </p>
                </div>
              </Col>
              <Col className="d-flex justify-content-center flex-column" lg={4}>
                <div>
                  <Link className="btn_engagement">Learn more</Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </Fade>
  );
}
