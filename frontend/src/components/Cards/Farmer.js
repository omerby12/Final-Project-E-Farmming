import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from '../UI/Rating';

const Farmer = ({ farmer }) => {
  return (
    <Card className='my-3 p-3 rounded text-center'>
      <Link to={`/farmer/${farmer._id}/products`}>
        <Card.Img className='farmer-img' src={farmer.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/farmer/${farmer._id}/products`}>
          <Card.Title as='div'>
            <strong>{farmer.farmName}</strong>
          </Card.Title>
        </Link>
      </Card.Body>
      <Card.Text as='div'>
        <Rating value={farmer.rating} text={`${farmer.numReviews} reviews`} />
      </Card.Text>
    </Card>
  );
};

export default Farmer;
