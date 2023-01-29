import "./Contact.scss";
import {
  Form,
  FormControl,
  Container,
  Row,
  Button,
  ListGroup,
  Col,
} from "react-bootstrap";

function Contact() {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Container className="contact">
      <Row className="contact-wrapper">
        <Col xl="6" className="contact-pic"></Col>
        <Col xl="6" className="contact-form">
          <h2>Contact me</h2>
          <Form
            onSubmit={submitHandler}
            method="POST"
            action="https://formspree.io/f/xyyakjar"
          >
            <ListGroup className="input-container">
              <ListGroup.Item variant="info">
                <FormControl
                  type="text"
                  placeholder="Your full names..."
                  name="fullname"
                />
              </ListGroup.Item>
            </ListGroup>
            <ListGroup className="input-container">
              <ListGroup.Item variant="danger">
                <FormControl
                  type="email"
                  placeholder="Your email..."
                  name="email"
                />
              </ListGroup.Item>
            </ListGroup>
            <ListGroup className="input-container">
              <ListGroup.Item variant="info">
                <FormControl
                  as="textarea"
                  rows={3}
                  type="text"
                  placeholder="Your message..."
                  name="message"
                />
              </ListGroup.Item>
            </ListGroup>
            <Button type="submit" variant="outline-dark">
              Submit
            </Button>{" "}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
