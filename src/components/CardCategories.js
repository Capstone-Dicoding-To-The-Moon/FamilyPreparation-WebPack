import React from "react";
import Card from 'react-bootstrap/Card';
import aduh from '../asset/aduh.svg';

const CardCategories = ( {data} ) => {
    return (
        <Card className="bg-dark text-white cardCategories">
        <Card.Img src={aduh} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="text-center">Card title</Card.Title>
        </Card.ImgOverlay>
      </Card> 
    )
}

export default CardCategories;