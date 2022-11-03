import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const FarmerProduct = ({ farmerProduct }) => {
  return (
    <Card className='my-3 p-3 rounded text-center'>
      <Link to={`/farmer-product/${farmerProduct._id}`}>
        <Card.Img src={farmerProduct.farmer.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/farmer-product/${farmerProduct._id}`}>
          <Card.Title as='div'>
            <strong>{farmerProduct.farmer.name}</strong>
          </Card.Title>
        </Link>
      </Card.Body>
      <Card.Text as='div'>
        <Rating
          value={farmerProduct.farmer.rating}
          text={`${farmerProduct.farmer.numReviews} reviews`}
        />
      </Card.Text>
      <Card.Text as='h3'>{farmerProduct.price}₪/kg</Card.Text>
    </Card>
  );
};

export default FarmerProduct;
