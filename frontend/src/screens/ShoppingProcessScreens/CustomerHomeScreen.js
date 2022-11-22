import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../../components/Cards/Product';
import Message from '../../components/UI/Message';
import Loader from '../../components/UI/Loader';
import { getProducts } from '../../features/product/productsSlice';

const CustomerHomeScreen = () => {
  const dispatch = useDispatch();

  const productsState = useSelector((state) => state.products);
  const { loading, error, products } = productsState;
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </React.Fragment>
  );
};

export default CustomerHomeScreen;
