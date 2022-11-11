import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/product/productsSlice';
import productsByFarmerReducer from '../features/product/productsByFarmerSlice';
import farmersReducer from '../features/farmer/farmersSlice';
import farmersByProductReducer from '../features/farmer/farmersByProductSlice';
import farmerProductReducer from '../features/farmerProduct/farmerProductDetailsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    productsByFarmer: productsByFarmerReducer,
    farmers: farmersReducer,
    farmersByProduct: farmersByProductReducer,
    farmerProduct: farmerProductReducer,
  },
});
