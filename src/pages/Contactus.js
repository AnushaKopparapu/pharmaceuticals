import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Container,
  Form,
  Row,
  Col,
  Card,
  Alert,
  Spinner,
} from "react-bootstrap";
import Backgroundimg from "../images/3.jpg";
import { Map, Envelope } from "react-bootstrap-icons";
import "./main.css";
import "./Contactus.css";

const initialFormState = {
  from_name: "",
  email: "",
  number: "",
  message: "",
};
const Contactus = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [formState, setFormState] = useState({
    isSubmitting: false,
    message: null,
    validated: false,
    isSuccess: false,
  });
  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const { from_name, email, number, message } = formData;
    return (
      from_name.trim() !== "" &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(number) &&
      message.trim() !== ""
    );
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setFormState((prev) => ({ ...prev, validated: true }));
      return;
    }

    setFormState((prev) => ({ ...prev, isSubmitting: true }));

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setFormState({
        isSubmitting: false,
        message: "Message sent successfully!",
        validated: false,
        isSuccess: true,
      });
      setFormData(initialFormState);
      formRef.current.reset();

      setTimeout(() => {
        setFormState((prev) => ({ ...prev, message: null, isSuccess: false }));
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setFormState({
        isSubmitting: false,
        message: "Error sending email: " + error.message,
        validated: false,
        isSuccess: false,
      });

      setTimeout(() => {
        setFormState((prev) => ({ ...prev, message: null }));
      }, 5000);
    }
  };

  return (
    <>
      <Card className="mainheader">
        <Card.Img
          src={Backgroundimg}
          alt="Card image"
          className="backgroundimg"
        />
        <Card.ImgOverlay>
          <Card.Title>
            <h2>Contact Us</h2>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>

      <Container>
        <Row>
          <Col md={5} lg={4}>
            <Map className="contact-icons" />
            <div className="contact-icons-body">
              <h5>Location</h5>
              <p></p>
            </div>
            <Envelope className="contact-icons" />
            <div className="contact-icons-body">
              <h5>Email</h5>
              <p>info@pharmaceuticals.com</p>
            </div>
          </Col>
          <Col md={7} lg={8}>
            {formState.message && (
              <Alert variant={formState.isSuccess ? "success" : "danger"}>
                {formState.message}
              </Alert>
            )}
            <Form
              ref={formRef}
              noValidate
              validated={formState.validated}
              className="form-container"
              onSubmit={sendEmail}
            >
              <Form.Group className="mb-3" controlId="user_name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleInputChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide your name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="user_email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="user_number">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid phone number.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter your text.."
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a message.
                </Form.Control.Feedback>
              </Form.Group>
              <button
                className="Submit"
                type="submit"
                disabled={formState.isSubmitting}
              >
                {formState.isSubmitting ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />{" "}
                    Sending...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contactus;
