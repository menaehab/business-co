import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../style/footer.css";
export default function Footer() {
  return (
    <Col md={12}>
      <footer className="footer">
        <Container>
          <Row>
            <Col md={3} className="mb-3">
              <div className="footer-title mt-5 mb-2 pb-1">About us</div>
              <p className="white-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500 text of the printing.
              </p>
            </Col>
            <Col md={3} className="mb-3">
              <div className="footer-title mt-5 mb-2 pb-1">Latest themes</div>
              <div className="footer-links">
                <Link to="/appointment">Appointment</Link>
                <Link to="/health-center">Health center</Link>
                <Link to="/quality">Quality</Link>
                <Link to="/wallstreet">Wallstreet</Link>
              </div>
            </Col>
            <Col md={3} className="mb-3">
              <div className="footer-title mt-5 mb-2 pb-1">Quick Links</div>
              <div className="footer-links">
                <Link to="/blog">Blog</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/terms">Terms & conditions</Link>
                <Link to="/privacy-policy">Privacy policy</Link>
              </div>
            </Col>
            <Col md={3} className="mb-3">
              <div className="footer-title mt-5 mb-2 pb-1">Support</div>
              <div className="footer-links">
                <Link to="/affiliate">Contact</Link>
                <Link to="/login">Login</Link>
                <Link to="/theme-package">Register</Link>
                <Link to="/support-forum">Support forum</Link>
              </div>
              <div className="footer-social-links mt-3">
                <ul className="list-unstyled d-flex gap-2">
                  <li>
                    <Link
                      to="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook aria-hidden="true" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter aria-hidden="true" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin aria-hidden="true" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube aria-hidden="true" />
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </Col>
  );
}
