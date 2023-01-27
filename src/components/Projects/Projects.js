import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dashboard from "../../Assets/Projects/powerdash.jpg";
import weather from "../../Assets/Projects/weather.jpg";
import Learning_hub from "../../Assets/Projects/lerning_hub.png";

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
              imgPath={weather}
              isBlog={false}
              title="Weather-App"
              description="In this weather app, I used react hooks, API calls, HTML, and CSS."
              demoLink=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Learning_hub}
              isBlog={false}
              title="Lerning Hub"
              description="Learning Hub is the website. I tried to implement the Python Django framework.
              Basically, this website is based on teacher students document sharing. a student can easily download notes shared by teachers.
              "
              ghLink=" "
              demoLink=" "              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Cryptocurruncy Dashboard"
              description="This is a power bi dashboard. I implemented the basics of data analytics. I learned data cleaning, data visualization, power bi, power query, etc."
              ghLink=" "
              demoLink=" "
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
