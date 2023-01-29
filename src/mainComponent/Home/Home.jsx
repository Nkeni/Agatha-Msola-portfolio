import "./Home.scss";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Home() {
  return (
    <Container className="home">
      <Card className="bg-dark text-white">
        <Card />
        <Card.ImgOverlay>
          <Card.Text>
            <h2>Hallo World,</h2>
            <h1>I am Agatha A Msola</h1>
            <h2>FullStack Web Developer</h2>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>

      <Row className="about-container">
        <Col xl="6" className="pic"></Col>
        <Col xl="6" className="about">
          <h3>About me</h3>
          <p>
            I am a FullStack Developer with a background in mathematics and
            statistics. One of the best decisions I have ever made was to join
            Digital Career Institute for the training program in FullStack Web
            Development. I can really see a bright future ahead of me
            careerwise. I have acquired Technical skills, soft skills and
            language skills at DCI. I am so excited of what future brings.
          </p>

          <div className="skills">
            <h3>Skills</h3>
            <Button>JS</Button>
            <Button>CSS</Button>
            <Button>SASS</Button>
            <Button>HTML</Button>
            <Button>REACT</Button>
            <Button>EXPRESS</Button>
            <Button>MONGODB</Button>
            <Button>BOOTSTRAP</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
