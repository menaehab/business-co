import React from "react";
import { Col, Row } from "react-bootstrap";
import "../style/Offer.css";
import { Fade } from "react-awesome-reveal";

export default function Offer() {
  return (
    <Fade>
      <section className="offer">
        <Row>
          <Col md={4} className="offer_card_1 offer_card">
            <div className="offer_text">
              <h1>Quality Product</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusm od tempor incididunt ut labore et dolore magna aliqua ut
                enim adminim.
              </p>
            </div>
          </Col>
          <Col md={4} className="offer_card_2 offer_card">
            <div className="offer_text">
              <h1>Growth Strategy</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusm od tempor incididunt ut labore et dolore magna aliqua ut
                enim adminim.
              </p>
            </div>
          </Col>
          <Col md={4} className="offer_card_3 offer_card">
            <div className="offer_text">
              <h1>Competitive Price</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusm od tempor incididunt ut labore et dolore magna aliqua ut
                enim adminim.
              </p>
            </div>
          </Col>
        </Row>
      </section>
    </Fade>
  );
}
