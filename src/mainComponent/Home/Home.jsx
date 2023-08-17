import "./Home.scss";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Home() {
  return (
    <Container className="home">
      <Card className="bg-dark text-white">
        <Card />
        <Card.ImgOverlay>
          {/* <Card.Text> */}
          <h2>Hallo World,</h2>
          <h1>I am Agatha A Msola</h1>
          <h2>FullStack Web Developer</h2>
          {/* </Card.Text> */}
        </Card.ImgOverlay>
      </Card>

      <Row className="about-container">
        <Col xl="6" className="about">
          <h4>Facts about me</h4>
          <p>
            <i class="fa-solid fa-heart"></i> I'm passionate about creating
            efficient and scalable solutions that deliver exceptional user
            experiences.
          </p>
          <p>
            <i class="fa-solid fa-briefcase"></i> Extensive experience in the
            MERN stack
          </p>
          <p>
            <i class="fas fa-award"></i> Excel in both Front End and Back End
            Development
          </p>
        </Col>
        <Col xl="6" className="skills">
          <h4>
            <i class="fa-solid fa-screwdriver-wrench"></i> Skills
          </h4>
          <Button>JS</Button>
          <Button>CSS</Button>
          <Button>SASS</Button>
          <Button>HTML</Button>
          <Button>REACT</Button>
          <Button>NODEJS</Button>
          <Button>EXPRESS</Button>
          <Button>MONGODB</Button>
          <Button>BOOTSTRAP</Button>
        </Col>
        {/* <Col xl="6" className="pic"></Col> */}
        {/* <Col xl="6" className="about">
          <h3>About me</h3>
          <p>
            I'm a full-stack developer with extensive experience in the MERN
            stack. I have a strong background in developing web applications
            using MongoDB, Express.js, React.js, and Node.js. I'm passionate
            about creating efficient and scalable solutions that deliver
            exceptional user experiences. On the front-end, I'm proficient in
            building responsive and interactive user interfaces using modern
            JavaScript frameworks like React.js. I have a deep understanding of
            component-based architecture and leveraging the latest web
            development technologies and best practices.
          </p>
          <p>
            When it comes to the back-end, I have a solid grasp of server-side
            development using Node.js and Express.js. I'm experienced in
            designing and developing RESTful APIs, integrating third-party APIs,
            and handling data persistence with MongoDB.
          </p> */}

        {/* <div className="skills">
            <h3>Skills</h3>
            <Button>JS</Button>
            <Button>CSS</Button>
            <Button>SASS</Button>
            <Button>HTML</Button>
            <Button>REACT</Button>
            <Button>EXPRESS</Button>
            <Button>MONGODB</Button>
            <Button>BOOTSTRAP</Button>
          </div> */}
        {/* </Col> */}
      </Row>
    </Container>
  );
}

export default Home;
