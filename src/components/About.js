import React from "react";
import "../style/about.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export default function About() {
  return (
    <Fade>
      <section className="about">
        <Container>
          <div className="about_text">
            <div className="about_icon">
              <i className="fas fa-anchor"></i>
            </div>
            <h1>About Company</h1>
            <p>
              Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus
              quis elementum. Phasellus sed efficitur dolor, et ultricies
              sapien. Quisque fringilla sit amet dolor commodo efficitur.
              Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum
              iaculis sit.
            </p>
            <Link className="btn_about">our work</Link>
          </div>
        </Container>
      </section>
    </Fade>
  );
}
