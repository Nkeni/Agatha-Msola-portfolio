import "./Projects.scss";
import { Container, Row, Button, Col, Carousel } from "react-bootstrap";
import port1 from "../../images/port11.png";
import port2 from "../../images/port22.png";
import port3 from "../../images/port33.png";
import journ1 from "../../images/journal1.png";
import journ2 from "../../images/journal22.png";
import git1 from "../../images/git1.png";
import git2 from "../../images/git2.png";

function Projects() {
  return (
    <Container className="projects">
      <Row className="project-details">
        <Col xl="5">
          <h3>Personal Portfolio</h3>
          <p>
            A personal portfolio website for my husband (Bob Kyeyune). All his
            research papers will be uploaded here.
          </p>
          <Button>
            <a
              href="https://nkeni.github.io/Bob-react-portfolio/"
              target="blank"
            >
              Live demo
            </a>
          </Button>
          <Button>
            {" "}
            <a
              href="https://github.com/Nkeni/Bob-react-portfolio"
              target="blank"
            >
              Source code
            </a>
          </Button>
        </Col>
        <Col xl="7" className="project-pictures">
          <Carousel>
            <Carousel.Item>
              <img
                style={{ maxHeight: "100vh" }}
                className="d-block w-100"
                src={port1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={port2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={port3} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <Row className="project-details">
        <Col xl="5">
          <h3>Journaling App</h3>
          <p>
            A simple journaling app for writing contents. I used some ideas from
            todo list apps.
          </p>
          <Button>
            <a href="https://nkeni.github.io/Journal-React/" target="blank">
              Live demo
            </a>
          </Button>
          <Button>
            {" "}
            <a href="https://github.com/Nkeni/Journal-React" target="blank">
              Source code
            </a>
          </Button>
        </Col>
        <Col xl="7">
          <Carousel>
            <Carousel.Item>
              <img
                style={{ maxHeight: "100vh" }}
                className="d-block w-100"
                src={journ1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={journ2} alt="Second slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <Row className="project-details">
        <Col xl="5">
          <h3>Github User Search App</h3>
          <p>
            A simple app to search for a github user. I used a github API in the
            backend to send the response in the front end.
          </p>
          <Button>
            <a
              href="https://github.com/Nkeni/backend-fetch-api-project"
              target="blank"
            >
              Live demo
            </a>
          </Button>
          <Button>
            {" "}
            <a
              href="https://github.com/Nkeni/backend-fetch-api-project"
              target="blank"
            >
              Source code
            </a>
          </Button>
        </Col>
        <Col xl="7">
          <Carousel>
            <Carousel.Item>
              <img
                style={{ maxHeight: "100vh" }}
                className="d-block w-100"
                src={git1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={git2} alt="Second slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
