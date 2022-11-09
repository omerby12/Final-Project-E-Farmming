import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Row, Col } from 'react-bootstrap';
import FarmerProduct from '../components/FarmerProduct';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listFarmers } from '../features/farmer/farmerThunk';

const FarmersScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const farmerList = useSelector((state) => state.farmer);
  const { loading, error, farmers } = farmerList;
  useEffect(() => {
    dispatch(listFarmers({ id }));
  }, [dispatch, id]);

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {farmers.map((farmerProduct) => (
            <Col key={farmerProduct._id} sm={12} md={6} Lg={4} xl={3}>
              <FarmerProduct farmerProduct={farmerProduct} />
            </Col>
          ))}
        </Row>
      )}
    </React.Fragment>
  );
};
export default FarmersScreen;
