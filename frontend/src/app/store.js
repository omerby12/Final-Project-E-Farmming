import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/product/productsSlice';
import productsByFarmerReducer from '../features/product/productsByFarmerSlice';
import farmersReducer from '../features/farmer/farmersSlice';
import farmersByProductReducer from '../features/farmer/farmersByProductSlice';
import farmerProductReducer from '../features/farmerProduct/farmerProductDetailsSlice';
import cartReducer from '../features/cart/cartSlice';
import { cartMiddleware } from '../features/cart/cartMiddleware';
import userReducer from '../features/user/userSlice';
import userDetailsReducer from '../features/user/userDetailsSlice';
import userUpdateProfileReducer from '../features/user/userUpdateProfileSlice';
import shippingAddressReducer from '../features/shippingAddress/shippingAddressSlice';
import userSessionReducer from '../features/userSession/userSessionSlice';

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  user: { userInfo: userInfoFromStorage },
};

export const store = configureStore({
  reducer: {
    products: productsReducer,
    productsByFarmer: productsByFarmerReducer,
    farmers: farmersReducer,
    farmersByProduct: farmersByProductReducer,
    farmerProduct: farmerProductReducer,
    cart: cartReducer,
    user: userReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    shippingAddress: shippingAddressReducer,
    userSession: userSessionReducer,
  },
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartMiddleware),
});
