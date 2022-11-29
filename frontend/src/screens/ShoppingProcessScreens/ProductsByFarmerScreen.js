import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import ProductByFarmer from '../../components/Cards/ProductByFarmer';
import Message from '../../components/UI/Message';
import Loader from '../../components/UI/Loader';
import {
  getProductsByFarmer,
  productsByFarmerActions,
} from '../../features/product/productsByFarmerSlice';

const ProductsByFarmerScreen = () => {
  const dispatch = useDispatch();
  const { id, keyword } = useParams();

  const productsByFarmerState = useSelector((state) => state.productsByFarmer);
  const { loading, error, productsByFarmer } = productsByFarmerState;
  useEffect(() => {
    dispatch(getProductsByFarmer({ id, keyword }));
  }, [dispatch, id, keyword]);

  useEffect(() => {
    return () => dispatch(productsByFarmerActions.clearProductsByFarmerData());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Link className='btn btn-light my-3' to='/farmers'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {productsByFarmer.map((productByFarmer) => (
            <Col key={productByFarmer._id} sm={12} md={6} Lg={4} xl={3}>
              <ProductByFarmer productByFarmer={productByFarmer} />
            </Col>
          ))}
        </Row>
      )}
    </React.Fragment>
  );
};
export default ProductsByFarmerScreen;
