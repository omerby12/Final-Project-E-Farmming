import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from 'react-bootstrap';
import Rating from '../components/UI/Rating';
import Message from '../components/UI/Message';
import Loader from '../components/UI/Loader';
import GoBack from '../components/UI/GoBack';
import { getFarmerProductDetails } from '../features/farmerProduct/farmerProductDetailsSlice';

const FarmerProductScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [qty, setQty] = useState(0);

  const farmerProductDetailsState = useSelector((state) => state.farmerProduct);
  const { loading, error, farmerProduct } = farmerProductDetailsState;

  useEffect(() => {
    dispatch(getFarmerProductDetails({ id }));
  }, [dispatch, id]);

  const navigate = useNavigate();
  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };

  return (
    <React.Fragment>
      <GoBack />
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

                {farmerProduct.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control
                          as='select'
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(farmerProduct.countInStock).keys()].map(
                            (x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            )
                          )}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item>
                  <Button
                    onClick={addToCartHandler}
                    className='btn-block btn-green'
                    type='button'
                    disabled={farmerProduct.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
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
