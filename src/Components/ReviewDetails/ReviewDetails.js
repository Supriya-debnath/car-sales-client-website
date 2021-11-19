import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const ReviewDetails = (props) => {
    console.log(props);
    const {img, name, review, rating} = props.review;

    return (
       <Col>
      <Card>
        <Card.Img variant="top" className="img" src={img} />
        <Card.Body className="details">
          <Card.Title>{name}</Card.Title>
                <h6>{review}</h6>
                <h6>Rating
                <Rating 
                    className="text-primary "
                    emptySymbol="fa fa-star-o "
                    fullSymbol="fa fa-star "
                    initialRating={rating}
                    readonly
                
                />
                {' '}{rating}
                </h6>
                 
        </Card.Body>
      </Card>
    </Col>
    );
};

export default ReviewDetails;