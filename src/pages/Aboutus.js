import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Aboutusimg from "../images/AboutUs.jpg";
import Vision from "../images/Vision.avif";
import Mission from "../images/Mission.jpg";
import Backgroundimg from "../images/3.jpg";

import "./main.css";
function Aboutus() {
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
            <h2>About Us</h2>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
      <section>
        <Container>
          <Row>
            <Col lg={4}>
              <Image src={Aboutusimg} className="aboutusimg" />
            </Col>
            <Col lg={8}>
              <div className="aboutustext">
                <p>
                  Pharmaceuticals is a fastest growing pharmaceutical company
                  dedicated to providing high-quality medical products and
                  services to healthcare professionals and patients worldwide.
                  With a focus on innovation, quality, and customer
                  satisfaction, Pharmaceuticals has established itself as a
                  trusted partner for healthcare organizations across various
                  industries.
                  <br /> <br />
                  Decades of scientific expertise and access to market-leading
                  technology enable us to meet your development and
                  manufacturing needs, no matter how complex. Our experts guide
                  you every step of the way with our end-to-end cGMP analytical
                  services and precise solutions. Collaborate with experts who
                  will ensure your compound and product attributes while
                  mitigating downstream risk in manufacturing with a complete
                  suite of chemistry-based analytical testing services. All
                  testing is conducted according to current USP, EP and JP
                  compendial methods and our internal quality assurance group
                  routinely audits each of our areas for strict compliance with
                  cGMP requirements. Partner with us to navigate the regulatory
                  landscape and make your program a success. We ensure that our
                  partners have the approved EUGMP, cGMP, USFDA, GMP,
                  Halal-Kosher, Korea FDA along with the documentation and
                  systems that are required for a regulated market. This makes
                  pharmaceutical a reliable source for an extensive range of
                  pharmaceutical ingredients to meet the needs of the
                  International pharmaceutical industry. the Company has been
                  supporting several domestic and international customers with
                  USDMF, EDMF, Canadian DMF, TDMF, KDMF, JDMF, COS, COPP, Tech
                  Pack etc. with respect to regulatory, non-regulatory and semi-
                  regulatory markets.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        <Row>
          <Col lg={4}>
            <Image src={Vision} className="visionimg" />
          </Col>

          <Col lg={8} className="visiontext">
            <div>
              Connecting globally and impacting lives as a premier provider of
              essential medicines, we are dedicated to delivering innovative
              products to healthcare professionals, enhancing the health and
              well-being of individuals. Our vision is to be a global leader in
              the pharmaceutical industry, recognized for our commitment to
              innovation, quality, and accessibility. We strive to improve
              health outcomes by providing cutting-edge and affordable
              medicines, fostering strong relationships with healthcare
              professionals, and advancing medical research. Through our
              dedication to excellence and sustainability, we aim to enhance the
              well-being of individuals and communities worldwide. We envision:
              <ul>
                <li>
                  Innovative Solutions: Pioneering new treatments and therapies
                  that address unmet medical needs.
                </li>
                <li>
                  Quality and Safety: Upholding the highest standards in every
                  aspect of our products and services.
                </li>
                <li>
                  Global Accessibility: Ensuring our medicines are available and
                  affordable to diverse populations across the globe.
                </li>
                <li>
                  Collaborative Partnerships: Building strong alliances with
                  healthcare professionals, researchers, and organizations to
                  drive healthcare advancements.
                </li>
                <li>
                  Employee Empowerment: Cultivating a workplace that encourages
                  growth, creativity, and a shared commitment to our mission.
                </li>
                <li>
                  Sustainable Practices: Integrating eco-friendly and ethical
                  practices into all facets of our operations to promote
                  long-term health and environmental well-being.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg={4}>
            <Image src={Mission} className="aboutusimg" />
          </Col>
          <Col lg={8} className="missiontext">
            Our mission is to enhance global health by delivering innovative,
            high-quality, and affordable pharmaceutical products. We are
            committed to advancing medical science through cutting-edge research
            and development, fostering strong partnerships, and ensuring the
            accessibility of essential medicines to all. We strive to:
            <br /> <br />
            <ul>
              <li>
                Innovate Continuously: Develop groundbreaking solutions that
                address unmet medical needs and improve patient outcomes.
              </li>
              <li>
                Ensure Quality: Maintain the highest standards in manufacturing
                to provide safe and effective products.
              </li>
              <li>
                Promote Accessibility: Make our medicines affordable and
                available to diverse populations worldwide.
              </li>
              <li>
                Foster Collaboration: Work with healthcare professionals,
                governments, and communities to enhance the overall healthcare
                ecosystem.
              </li>
              <li>
                Empower Our People: Invest in the growth and development of our
                employees, nurturing a culture of integrity, excellence, and
                respect.
              </li>
              <li>
                Sustainability and Responsibility: Conduct our business
                ethically and sustainably, contributing positively to society
                and the environment.
              </li>
              <li>
                Through our dedication and passion, we aim to be a trusted
                leader in the pharmaceutical industry, making a significant
                impact on global health and well-being.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Aboutus;
