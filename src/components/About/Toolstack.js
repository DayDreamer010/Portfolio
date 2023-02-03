import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiJirasoftware,
  SiBlender,
} from "react-icons/si";
import {
  DiPhotoshop,
  DiUnitySmall,
  DiGithubBadge,
  DiBitbucket,
} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiUnitySmall />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBlender />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJirasoftware />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBitbucket />
      </Col>

    </Row>
  );
}

export default Toolstack;
