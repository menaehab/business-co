import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../style/header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const Sidenav = ({ isOpen, closeNav }) => {
    return (
      <>
        <div className={`sidenav ${isOpen ? "open" : ""}`}>
          <Link className="closebtn" onClick={closeNav}>
            &times;
          </Link>
          <Link>About</Link>
          <Link>Services</Link>
          <Link>Clients</Link>
          <Link>Contact</Link>
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>Business Co</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link>
              <span
                style={{ fontSize: "30px", cursor: "pointer" }}
                onClick={openNav}
              >
                &#9776;
              </span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Sidenav isOpen={isOpen} closeNav={closeNav} />
    </>
  );
}
