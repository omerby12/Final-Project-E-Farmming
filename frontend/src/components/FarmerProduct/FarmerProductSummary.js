import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Row, Col, ListGroup, Card, Button, Form } from 'react-bootstrap';

const FarmerProductSummary = ({ farmerProduct }) => {
  const { id } = useParams();
  const [qty, setQty] = useState(1);

  const navigate = useNavigate();
  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };

  return (
    <Col md={3} className='offset-md-3'>
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
                {farmerProduct.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
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
                    {[...Array(farmerProduct.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
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
  );
};

export default FarmerProductSummary;
