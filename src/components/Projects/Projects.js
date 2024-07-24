import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Mind from "../../Assets/Projects/Mind.png";
import ku from "../../Assets/Projects/ku.png";
import world from "../../Assets/Projects/World.png";
import Guideline from "../../Assets/Projects/Guideline.png";
import EducationGuide from "../../Assets/Projects/EducationGuide.png";
import Jym from "../../Assets/Projects/Jym.png";

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
              imgPath={Guideline}
              isBlog={false}
              title="Education"
              description="The function of education is to teach one to think intensively and to think critically. Intelligence plus character — that is the goal of true education. Martin Luther King Jr."
              ghLink="https://github.com/Vidarbh-Sharma/Education.git"
              demoLink="https://github.com/Vidarbh-Sharma/Education.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Jym}
              isBlog={false}
              title="JYM"
              description="Life Fitness Inspiring the world to work out."
              ghLink="https://github.com/Vidarbh-Sharma/JIM.git"
              demoLink="https://github.com/Vidarbh-Sharma/JIM.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={world}
              isBlog={false}
              title="Word-Explore"
              description="Online code One way to approach life's challenges is to embrace an explorer's mindset, a mindset that is open to new experiences and challenges, even in the face of fear. At its core, the explorer's mindset is all about curiosity and a willingness to take risks."
              ghLink="https://github.com/Vidarbh-Sharma/Word-Explore.git"
              demoLink="https://github.com/Vidarbh-Sharma/Word-Explore.git"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mind}
              isBlog={false}
              title="Mindgameproject"
              description="CODE.GAME, a graphical programming platform for kids from age 3+，is a full STEAM. education package and solution for both educators and creators at home."
              ghLink="https://github.com/Vidarbh-Sharma/Mindgameproject.git"
              demoLink="https://github.com/Vidarbh-Sharma/Mindgameproject.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EducationGuide}
              isBlog={false}
              title="Countryguide"
              description="GeoGuessr is the most fun game out there! Easy to learn but really hard to master, so is really addictive!"

              ghLink="https://github.com/Vidarbh-Sharma/Countryguide.git"
              // demoLink="https://github.com/Vidarbh-Sharma/Countryguide.git" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ku}
              isBlog={false}
              title="Basic-3dProject"
              description="Basic-3dProject"
              ghLink="https://github.com/Vidarbh-Sharma/Basic-3dProject.git"
              // demoLink="https://github.com/Vidarbh-Sharma/Basic-3dProject.git"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
