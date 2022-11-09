import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Farmer from '../components/Farmer';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listFarmers } from '../features/farmer/farmerThunk';

const FarmersScreen = () => {
  const dispatch = useDispatch();

  const farmerState = useSelector((state) => state.farmer);
  const { loading, error, farmers } = farmerState;
  useEffect(() => {
    dispatch(listFarmers());
  }, [dispatch]);

  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {farmers.map((farmer) => (
            <Col key={farmer._id} sm={12} md={6} lg={4} xl={3}>
              <Farmer farmer={farmer} />
            </Col>
          ))}
        </Row>
      )}
    </React.Fragment>
  );
};

export default FarmersScreen;
