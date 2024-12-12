import Card from "react-bootstrap/Card";
import { carditems } from "./carditems";
import "./card.css";

function card() {
  return (
    <>
      <div className="card-group">
        {carditems.map((card) => (
          <div className="card-details" key={card.id}>
            <Card>
              <Card.Img src={card.image} alt="Card image cap" />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default card;
