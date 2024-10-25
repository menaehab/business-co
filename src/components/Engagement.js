import React from "react";
import { Col, Row } from "react-bootstrap";
import "../style/engagement.css";
import engagementImage from "../assets/engagement.jpg";
import { Link } from "react-router-dom";
export default function Engagement() {
  return (
    <section className="engagment">
      <Row>
        <Col lg={6}>
          <img
            className="engagment_image"
            src={engagementImage}
            alt="engagementImage"
          />
        </Col>
        <Col lg={6} className="d-flex flex-column justify-content-center">
          <div className="engagment_text">
            <h1>Doing The Right Thing, At The Right Time</h1>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <Link className="btn_engagement">learn more</Link>
          </div>
        </Col>
      </Row>
    </section>
  );
}
