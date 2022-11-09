import { createSlice } from '@reduxjs/toolkit';
import { listProducts, listProductsByFarmer } from './productThunk';

const initialProductState = {
  products: [],
  productsByFarmer: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState: initialProductState,
  reducers: {},
  extraReducers: {
    // listProducts
    [listProducts.pending]: (state) => {
      state.loading = true;
      state.products = [];
      state.productsByFarmer = [];
    },
    [listProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
      state.loading = false;
      state.productsByFarmer = [];
    },
    [listProducts.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.products = [];
      state.productsByFarmer = [];
    },

    //listProductsByFarmer
    [listProductsByFarmer.pending]: (state) => {
      state.loading = true;
      state.productsByFarmer = [];
      state.products = [];
    },
    [listProductsByFarmer.fulfilled]: (state, { payload }) => {
      state.productsByFarmer = payload;
      state.loading = false;
      state.products = [];
    },
    [listProductsByFarmer.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.products = [];
      state.productsByFarmer = [];
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
