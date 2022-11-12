import React from 'react';
import { Col, Image, ListGroup } from 'react-bootstrap';
import Rating from '../UI/Rating';

const FarmerInfo = ({ farmerProduct }) => {
  return (
    <Col md={3}>
      <ListGroup variant='flush'>
        <ListGroup.Item>
          <Image
            src={farmerProduct.farmer.image}
            alt={farmerProduct.farmer.farmName}
            fluid
          />
        </ListGroup.Item>
      </ListGroup>
      <ListGroup.Item>
        <Rating
          value={farmerProduct.farmer.rating}
          text={`${farmerProduct.farmer.numReviews} reviews`}
        />
      </ListGroup.Item>
    </Col>
  );
};

export default FarmerInfo;
