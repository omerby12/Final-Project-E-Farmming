import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/productSlice';
import farmerReducer from '../features/farmer/farmerSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    farmer: farmerReducer,
  },
});
