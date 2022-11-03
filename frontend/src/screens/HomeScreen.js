import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

const HomeScreen = () => {
  return (
    <React.Fragment>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} Lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default HomeScreen;
