import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import ProductByFarmer from '../../components/Cards/ProductByFarmer';
import Message from '../../components/UI/Message';
import Loader from '../../components/UI/Loader';
import GoBack from '../../components/UI/GoBack';
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
      <GoBack />
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
