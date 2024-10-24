import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpg";
import "../style/hero.css";
export default function Hero() {
  return (
    <Container>
      <Row className="align-items-center">
        <Col lg={4} className="d-flex flex-column justify-content-center">
          <div className="hero_text">
            <h1 className="hero_title">
              We help your brand to be recognizable
            </h1>
            <p className="hero_description">
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur
            </p>
            <Link className="btn btn_hero">learn more</Link>
          </div>
        </Col>
        <Col lg={8}>
          <img className="hero_img" src={heroImage} alt="hero img" />
        </Col>
      </Row>
    </Container>
  );
}
