import React from "react";
import "../style/service.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Service() {
  return (
    <section className="service">
      <Container>
        <div className="service_main">
          <h1>Our Services</h1>
          <p>
            Consectetur adipiscing elit nullam nunc justo sagittis suscipit
            ultrices.
          </p>
        </div>
        <div className="service_cards">
          <Row>
            <Col md={4}>
              <div className="service_card">
                <i className="fas fa-brain"></i>
                <h3>Branding</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam
                  nunc justo sagittis suscipit ultrices.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="service_card">
                <i className="fas fa-satellite-dish"></i>
                <h3>Branding</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam
                  nunc justo sagittis suscipit ultrices.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="service_card">
                <i className="fab fa-bilibili"></i>
                <h3>Development</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam
                  nunc justo sagittis suscipit ultrices.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="service_card">
                <i className="fas fa-palette"></i>
                <h3>Web Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam
                  nunc justo sagittis suscipit ultrices.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="service_card">
                <i className="fas fa-mobile-screen-button"></i>
                <h3>Social Media</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam
                  nunc justo sagittis suscipit ultrices.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="service_card">
                <i className="fas fa-chart-line"></i>
                <h3>Ecommerce</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam
                  nunc justo sagittis suscipit ultrices.
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="text-center">
          <Link className="btn_service">learn more</Link>
        </div>
      </Container>
    </section>
  );
}
