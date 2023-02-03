import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              i have passion for game creation process. Through my journey, I have learned and gained some knowledge in this field and I am thrilled about it.
              <br />
              <br />I am a team player who believe in the
              <i>
                <b className="purple">  power of Collaboration. </b>
              </i>
              <br />
              <br />
              My area of specialization encompasses the creation of &nbsp;
              <i>
                <b className="purple">innovative particle systems  </b> and
                the acquisition of knowledge and proficiency in the utilization of {" "}
                <b className="purple">
                  new tools and advanced technologies.
                </b>
              </i>
              <br />
              <br />
              Furthermore, I endeavor to cultivate my interest in developing assets through the utilization of platforms such as
              <b className="purple"> Unity and Photoshop</b> , which includes the creation of

              <b className="purple">
                {" "}
                Shaders utilizing the Shadergraph
              </b>

              &nbsp; and the design of

              <b className="purple"> 2D game assets.</b>

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
