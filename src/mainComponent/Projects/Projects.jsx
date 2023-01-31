import "./Projects.scss";
import { Container, Row, Button, Col, Carousel } from "react-bootstrap";
import port1 from "../../images/port1.png";
import port2 from "../../images/port2.png";
import port3 from "../../images/port3.png";
import journ1 from "../../images/journal1.png";
import journ2 from "../../images/journal2.png";
import git1 from "../../images/git1.png";
import git2 from "../../images/git2.png";

function Projects() {
  return (
    <Container className="projects">
      <Row className="project-details">
        <Col xl="5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            atque sint velit explicabo accusantium iusto dolore odio eaque
            quidem aperiam!
          </p>
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            atque sint velit explicabo accusantium iusto dolore odio eaque
            quidem aperiam!
          </p>
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            atque sint velit explicabo accusantium iusto dolore odio eaque
            quidem aperiam!
          </p>
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
