import { createSlice } from '@reduxjs/toolkit';
import { listProducts } from './productThunk';

const initialProductState = { products: [], loading: false, error: null };

const productSlice = createSlice({
  name: 'product',
  initialState: initialProductState,
  reducers: {},
  extraReducers: {
    // listProducts
    [listProducts.pending]: (state) => {
      state.loading = true;
      state.products = [];
    },
    [listProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
      state.loading = false;
    },
    [listProducts.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
