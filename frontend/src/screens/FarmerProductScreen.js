import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Message from '../components/UI/Message';
import Loader from '../components/UI/Loader';
import GoBack from '../components/UI/GoBack';
import FarmerProduct from '../components/FarmerProduct/FarmerProduct';
import { getFarmerProductDetails } from '../features/farmerProduct/farmerProductDetailsSlice';

const FarmerProductScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const farmerProductDetailsState = useSelector((state) => state.farmerProduct);
  const { loading, error, farmerProduct } = farmerProductDetailsState;

  useEffect(() => {
    dispatch(getFarmerProductDetails({ id }));
  }, [dispatch, id]);

  return (
    <React.Fragment>
      <GoBack />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <FarmerProduct farmerProduct={farmerProduct} />
      )}
    </React.Fragment>
  );
};
export default FarmerProductScreen;
