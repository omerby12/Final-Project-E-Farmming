import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import FarmerByProduct from '../../components/Cards/FarmerByProduct';
import Message from '../../components/UI/Message';
import Loader from '../../components/UI/Loader';
import { getFarmersByProduct } from '../../features/farmer/farmersByProductSlice';

const FarmersByProductScreen = () => {
  const dispatch = useDispatch();

  const { id, keyword } = useParams();

  const farmersByProductState = useSelector((state) => state.farmersByProduct);
  const { loading, error, farmersByProduct } = farmersByProductState;

  useEffect(() => {
    dispatch(getFarmersByProduct({ id, keyword }));
  }, [dispatch, id, keyword]);

  return (
    <React.Fragment>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
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
