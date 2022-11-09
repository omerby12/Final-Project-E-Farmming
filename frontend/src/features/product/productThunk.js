import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const listProducts = createAsyncThunk(
  'product/listProducts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/products');
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const listProductsByFarmer = createAsyncThunk(
  'farmer/listProductsByFarmer',
  async ({ id }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/farmers/${id}/products`);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
