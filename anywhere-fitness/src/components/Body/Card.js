import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function Cards(cardData) {
  return (
    <Card className="card">
      <CardBody className="card">
        <CardTitle className="card-title">{cardData.title}</CardTitle>
        <CardText className="card-desc">{cardData.description}</CardText>
        <Link to="/classList" className="card-btn">
          {cardData.btn}
        </Link>
      </CardBody>
    </Card>
  );
}

export default Cards;
