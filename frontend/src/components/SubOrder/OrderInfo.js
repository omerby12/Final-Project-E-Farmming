import React from 'react';
import { Col, ListGroup } from 'react-bootstrap';
import OrderInfoShipping from './OrderInfoShipping';
import OrderInfoPayment from './OrderInfoPayment';
import OrderInfoItems from './OrderInfoItems';

const OrderInfo = ({ order }) => {
  return (
    <Col md={8}>
      <ListGroup variant='flush'>
        <OrderInfoShipping order={order} />
        <OrderInfoPayment order={order} />
        <OrderInfoItems order={order} />
      </ListGroup>
    </Col>
  );
};

export default OrderInfo;
