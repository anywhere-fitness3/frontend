import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function Cards(cardData) {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{cardData.title}</CardTitle>
          <CardText>{cardData.description}</CardText>
          <Link>{cardData.btn}</Link>
        </CardBody>
      </Card>
    </div>
  );
}

export default Cards;
