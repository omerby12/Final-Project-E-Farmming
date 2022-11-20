import React from 'react';
import { Row, Col, ListGroup, Card } from 'react-bootstrap';

const OrderSummary = ({ order }) => {
  return (
    <Col md={4}>
      <Card>
        <ListGroup variant='flush'>
          <ListGroup.Item className='m-auto'>
            <h2>Order Summary</h2>
          </ListGroup.Item>

          <ListGroup.Item>
            <Row>
              <Col>Total</Col>
              <Col>{order.totalPrice}₪</Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Col>
  );
};

export default OrderSummary;
