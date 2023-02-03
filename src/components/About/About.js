import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import model from "../../Assets/63dbe5a172f63b7131e14aa6.glb";
function renderPlayer() {
  const params =
  {
    // Replace with the .glb URL for the desired avatar.
    model: model,
    // Type of portrait to render.
    scene: "fullbody-portrait-v1",
    // Optional: Pose. Default: T-pose.
    armature: "ArmatureTargetMale",
    // Optional: Facial expression. Default: Empty.
    "blendShapes": { "Wolf3D_Avatar": { "mouthSmile": 0.2 } }
  }
  const http = new XMLHttpRequest()
  http.open("POST", "https://render.readyplayer.me/render")
  http.setRequestHeader("Content-type", "application/json")
  http.send(JSON.stringify(params))
  http.onload = function () {
    // Show the response
    alert(http.responseText)

    // Parse the response and display the image
    var image = JSON.parse(http.responseText)["renders"]
    var outputImg = document.createElement('img')
    outputImg.src = image
    document.body.appendChild(outputImg)
  }
}
function About() {
  return (
    <Container fluid className="about-section">

      {/* {this.renderPlayer()} */}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            className="about-img"
          >
            <model-viewer style={{ justifyContent: "center", width: "100%", height: "100%" }} src={model} shadow-intensity="5" alt="Dimpal Raval" auto-rotate camera-controls ar ios-src={model} generate-schema></model-viewer>
            {/* <img src={laptopImg} alt="about" className="img-fluid" /> */}
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );



}

export default About;
