import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Row, Col } from 'react-bootstrap';
import FarmerByProduct from '../components/FarmerByProduct';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getFarmersByProduct } from '../features/farmer/farmersByProductSlice';

const FarmersByProductScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const farmersByProductState = useSelector((state) => state.farmersByProduct);
  const { loading, error, farmersByProduct } = farmersByProductState;
  useEffect(() => {
    dispatch(getFarmersByProduct({ id }));
  }, [dispatch, id]);

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {farmersByProduct.map((farmerByProduct) => (
            <Col key={farmerByProduct._id} sm={12} md={6} Lg={4} xl={3}>
              <FarmerByProduct farmerByProduct={farmerByProduct} />
            </Col>
          ))}
        </Row>
      )}
    </React.Fragment>
  );
};
export default FarmersByProductScreen;
