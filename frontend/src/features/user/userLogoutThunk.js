import { createAsyncThunk } from '@reduxjs/toolkit';
import { userLoginActions } from './userLoginSlice';

export const logout = createAsyncThunk(
  'user/logout',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      localStorage.removeItem('userInfo');
      localStorage.removeItem('cartItems');
      dispatch(userLoginActions.userLogout());
      document.location.href = '/login';
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
