import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialProductsByFarmerState = {
  productsByFarmer: [],
  loading: false,
  error: null,
};

export const getProductsByFarmer = createAsyncThunk(
  'product/getProductsByFarmer',
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

const productsByFarmerSlice = createSlice({
  name: 'productsByFarmer',
  initialState: initialProductsByFarmerState,
  reducers: {},
  extraReducers: {
    //getProductsByFarmer
    [getProductsByFarmer.pending]: (state) => {
      state.loading = true;
      state.productsByFarmer = [];
    },
    [getProductsByFarmer.fulfilled]: (state, { payload }) => {
      state.productsByFarmer = payload;
      state.loading = false;
    },
    [getProductsByFarmer.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.productsByFarmer = [];
    },
  },
});

export const productsByFarmerActions = productsByFarmerSlice.actions;
export default productsByFarmerSlice.reducer;
