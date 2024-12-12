import React from "react";
import "./main.css";
import Card from "react-bootstrap/Card";
import Backgroundimg from "../images/3.jpg";

function Career() {
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
            <h2>Career</h2>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>

      <h6>
        Please email your CV to <strong>info@pharmaceuticals.com</strong>
      </h6>
    </>
  );
}
export default Career;
