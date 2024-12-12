import React from "react";
import { Card } from "react-bootstrap";
import Backgroundimg from "../images/3.jpg";
import Transitions from "../components/fade";

function Products() {
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
            <h2>Products</h2>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
      {/* <Tab /> */}
      <Transitions />
    </>
  );
}
export default Products;
