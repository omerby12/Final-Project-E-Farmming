import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Farmer from '../../components/Cards/Farmer';
import Message from '../../components/UI/Message';
import Loader from '../../components/UI/Loader';
import { getFarmers } from '../../features/farmer/farmersSlice';

const FarmersScreen = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams();

  const farmersState = useSelector((state) => state.farmers);
  const { loading, error, farmers } = farmersState;

  useEffect(() => {
    dispatch(getFarmers({ keyword }));
  }, [dispatch, keyword]);

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
