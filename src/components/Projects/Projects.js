import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bingobash from "../../Assets/Projects/bingoimg.jpg";
import foodfight from "../../Assets/Projects/foodfight.png";
import ivox from "../../Assets/Projects/vox.png";

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
              title="Food Fight"
              description="Enter the frenzy of the culinary establishment in 'Restaurant Chaos', a high-stakes, fast-paced game that tasks players with satisfying the voracious appetite of hungry patrons. Players must demonstrate their dexterity, swiftness, and forethought by swiftly selecting and arranging palatable fare, while avoiding the pernicious provisions denoted by a distinctive vermilion rim. A true test of skill, velocity, and tactics, 'Restaurant Chaos' promises to be a thrilling and challenging experience."
              ghLink=""
              demoLink="https://play.google.com/store/apps/details?id=com.infinitefun.foodfights2&hl=en_US&gl=US"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
