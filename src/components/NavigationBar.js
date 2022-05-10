import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../pubinnoLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function NavigationBar() {
  return (
    <Navbar className="navBar p-0">
      <Container className="p-0">
        <Navbar.Brand href="#home" className="p-0">
          <img src={logo} alt="pubinno" loading="lazy" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <FontAwesomeIcon icon={faUser} size="xl" inverse />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
