import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const listFarmers = createAsyncThunk(
  'farmer/listFarmers',
  async ({ id }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/products/${id}/farmers`);
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
