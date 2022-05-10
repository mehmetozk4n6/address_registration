import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Header() {
  return (
    <div className="border-bottom border-5 p-1">
      <Container>
        <Row>
          <Col xs={3}></Col>
          <Col xs={9} className="p-1 text-start fw-bold">
            Pubinno Test
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
