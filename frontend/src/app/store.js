import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/product/productsSlice';
import productDetailsReducer from '../features/product/productDetailsSlice';
import productsByFarmerReducer from '../features/product/productsByFarmerSlice';
import productCreateReducer from '../features/product/productCreateSlice';
import productUpdateReducer from '../features/product/productUpdateSlice';

import farmersReducer from '../features/farmer/farmersSlice';
import farmersByProductReducer from '../features/farmer/farmersByProductSlice';
import farmerProductReducer from '../features/farmerProduct/farmerProductDetailsSlice';
import farmerProductCreateReducer from '../features/farmerProduct/farmerProductCreateSlice';
import farmerProductUpdateReducer from '../features/farmerProduct/farmerProductUpdateSlice';

import cartReducer from '../features/cart/cartSlice';
import { cartMiddleware } from '../features/cart/cartMiddleware';
import userReducer from '../features/user/userSlice';
import userDetailsReducer from '../features/user/userDetailsSlice';
import userUpdateProfileReducer from '../features/user/userUpdateProfileSlice';
import shippingAddressReducer from '../features/shippingAddress/shippingAddressSlice';
import userSessionReducer from '../features/userSession/userSessionSlice';
import orderCreateReducer from '../features/order/orderCreateSlice';
import orderDetailsReducer from '../features/order/orderDetailsSlice';
import subOrderDetailsReducer from '../features/order/subOrderDetailsSlice';
import subOrderDeliverReducer from '../features/order/subOrderDeliverSlice';
import subOrderListByFarmerReducer from '../features/order/subOrderListByFarmerSlice';
import orderPayReducer from '../features/order/orderPaySlice';
import orderListMyReducer from '../features/order/orderListMySlice';
import farmerByUserReducer from '../features/farmer/farmerByUserSlice';
import searchBoxReducer from '../features/search/searchBoxSlice';

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
    productDetails: productDetailsReducer,
    productsByFarmer: productsByFarmerReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    farmers: farmersReducer,
    farmersByProduct: farmersByProductReducer,
    farmerProduct: farmerProductReducer,
    farmerProductCreate: farmerProductCreateReducer,
    farmerProductUpdate: farmerProductUpdateReducer,
    cart: cartReducer,
    user: userReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    shippingAddress: shippingAddressReducer,
    userSession: userSessionReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    subOrderDetails: subOrderDetailsReducer,
    subOrderDeliver: subOrderDeliverReducer,
    subOrderListByFarmer: subOrderListByFarmerReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
    farmerByUser: farmerByUserReducer,
    searchBox: searchBoxReducer,
  },
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartMiddleware),
});
