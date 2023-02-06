import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bingobash from "../../Assets/Projects/bingoimg.jpg";
import foodfight from "../../Assets/Projects/foodfight.mp4";
import ivox from "../../Assets/Projects/Vox.mp4";
import weatherChange from "../../Assets/Projects/weather-change.mp4";
import NightLighting from "../../Assets/Projects/NightLighting.mp4";
import StarWars from "../../Assets/Projects/Starwars.mp4";
import PepsiDemo from "../../Assets/Projects/pepsiDemo.mp4";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bingobash}
              isVideo={false}
              isBlog={false}
              title="Bingo Bash"
              description="Bingo Bash is a technologically advanced, globally accessible digital iteration of the traditional game of bingo that offers an invigorating and immersive experience for players of varying ages and backgrounds. Through its incorporation of classical bingo mechanics and innovative challenges, Bingo Bash serves as an exciting platform for bingo aficionados to come together and engage in the timeless pastime."
              ghLink=""
              demoLink="https://play.google.com/store/apps/details?id=air.com.bitrhymes.bingo&hl=en_IN&gl=US&pli=1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ivox}
              isBlog={false}
              isVideo={true}
              title="IVOX"
              description="iVox is a technologically advanced children's book application designed to captivate and engage young minds through the utilization of cutting-edge storytelling technology. Accessible to ages 2-10, it offers a rich and diverse library of immersive stories with stunning animations and interactive elements, available through institutional subscriptions. The app offers a unique, interactive reading experience and is readily accessible for free download for children and families."
              ghLink=""
              demoLink="https://play.google.com/store/apps/details?id=com.libraryideas.ivox&hl=en_US&gl=US"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodfight}
              isBlog={false}
              isVideo={true}
              title="Food Fight"
              description="Enter the frenzy of the culinary establishment in 'Restaurant Chaos', a high-stakes, fast-paced game that tasks players with satisfying the voracious appetite of hungry patrons. Players must demonstrate their dexterity, swiftness, and forethought by swiftly selecting and arranging palatable fare, while avoiding the pernicious provisions denoted by a distinctive vermilion rim. A true test of skill, velocity, and tactics, 'Restaurant Chaos' promises to be a thrilling and challenging experience."
              ghLink=""
              demoLink="https://play.google.com/store/apps/details?id=com.infinitefun.foodfights2&hl=en_US&gl=US"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NightLighting}
              isBlog={false}
              isVideo={true}
              title="Car Chase In Night"
              description="Created a car chase sequence in the night scene of toon city asset from asset store. It includes light baking and light probes along with car suspension animation on acceleration and break."
              ghLink="https://github.com/DayDreamer010/Night-Lighting-Demo"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherChange}
              isBlog={false}
              isVideo={true}
              title="Weather System Demo"
              description="Created a weather system including day night cycle with low to heavy rainfall via particle system with sound effects."
              ghLink="https://github.com/DayDreamer010/Weather-System-Demo"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StarWars}
              isBlog={false}
              isVideo={true}
              title="Star Wars Force field"
              description="Created a force field shader using unity shader graph. Integrated it with star wars lego characters and implemented bullets using particle system."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PepsiDemo}
              isBlog={false}
              isVideo={true}
              title="Pepsi Web Ar Demo"
              description="Created an AR Prduct demo for pepsi."
              ghLink=""
              demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
