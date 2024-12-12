import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Pharma2 from "../images/Pharma_2.jpg";
import Pharma3 from "../images/Pharma_3.jpg";
import Pharma1 from "../images/Pharma_1.jpg";
import "./imageslidecarousels.css";

function imageslidecarousels() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={Pharma1} alt="First slide" />
        <Carousel.Caption>
          <h3>Pioneering Innovations in Healthcare</h3>
          <p>Developing advanced solutions for a healthier tomorrow.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src={Pharma2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Your Health, Our Priority</h3>
          <p>Providing quality medicines and personalized care solutions.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Pharma3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Making Healthcare Accessible Globally</h3>
          <p>Innovating with global expertise for local healthcare needs.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default imageslidecarousels;
