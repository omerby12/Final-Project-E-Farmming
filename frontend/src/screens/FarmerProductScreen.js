import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getFarmerProductDetails } from '../features/farmerProduct/farmerProductDetailsSlice';

const FarmerProductScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const farmerProductDetailsState = useSelector((state) => state.farmerProduct);
  const { loading, error, farmerProduct } = farmerProductDetailsState;

  useEffect(() => {
    dispatch(getFarmerProductDetails({ id }));
  }, [dispatch, id]);

  // if (Object.entries(farmerProduct).length === 0) {
  //   return null;
  // }

  return (
    <React.Fragment>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
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
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Image
                  src={farmerProduct.product.image}
                  alt={farmerProduct.product.name}
                  fluid
                />
              </ListGroup.Item>
            </ListGroup>
            <ListGroup.Item>{farmerProduct.product.name}</ListGroup.Item>
            <ListGroup.Item>Price: {farmerProduct.price}₪ / kg</ListGroup.Item>
          </Col>
          <Col md={3}></Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>{farmerProduct.price}₪</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {farmerProduct.countInStock > 0
                        ? 'In Stock'
                        : 'Out Of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className='btn-block btn-green'
                    type='button'
                    disabled={farmerProduct.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                  ;
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </React.Fragment>
  );
};
export default FarmerProductScreen;
