import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dimpal Raval </span>
            from <span className="purple"> Ahmedabad, Gujarat, India.</span>
            <br />I am a Technical Artist
            <br /> But
            <br />
            Apart from this, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Create FX
            </li>
            <li className="about-activity">
              <ImPointRight /> Play Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Hang in there, Success takes time!"{" "}
          </p>
          <footer className="blockquote-footer">Dimpal Raval</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
