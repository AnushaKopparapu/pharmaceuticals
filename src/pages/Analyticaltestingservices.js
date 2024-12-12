import React from "react";
import "./main.css";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Backgroundimg from "../images/3.jpg";

function testingservice() {
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
            <h2>Analytical Testing Services</h2>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
      <Container>
        <p>
          Leveraging decades of scientific expertise and cutting-edge
          technology, we address your development and manufacturing needs,
          regardless of complexity. Our team of experts supports you throughout
          the entire process with comprehensive cGMP analytical services and
          precise solutions. Partner with us to benefit from our full suite of
          chemistry-based analytical testing services, designed to ensure the
          integrity and attributes of your compounds and products. We adhere to
          the highest standards, following current USP, EP, and JP compendial
          methods, and our internal quality assurance team rigorously audits all
          operations to ensure strict cGMP compliance. Let us guide you through
          the regulatory landscape and drive your program toward success with
          confidence and precision.
        </p>
      </Container>
    </>
  );
}
export default testingservice;
