import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialProductsState = {
  products: [],
  loading: false,
  error: null,
};

export const getProducts = createAsyncThunk(
  'product/getProducts',
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

const productsSlice = createSlice({
  name: 'products',
  initialState: initialProductsState,
  reducers: {},
  extraReducers: {
    // getProducts
    [getProducts.pending]: (state) => {
      state.loading = true;
      state.products = [];
      state.error = null;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
      state.loading = false;
      state.error = null;
    },
    [getProducts.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.products = [];
    },
  },
});

export const productsActions = productsSlice.actions;
export default productsSlice.reducer;
