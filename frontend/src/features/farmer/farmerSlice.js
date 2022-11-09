import { createSlice } from '@reduxjs/toolkit';
import { listFarmers, listFarmersByProduct } from './farmerThunk';

const initialFarmerState = {
  farmers: [],
  farmersByProduct: [],
  loading: false,
  error: null,
};

const farmerSlice = createSlice({
  name: 'farmer',
  initialState: initialFarmerState,
  reducers: {},
  extraReducers: {
    //listFarmers
    [listFarmers.pending]: (state) => {
      state.loading = true;
      state.farmers = [];
      state.farmersByProduct = [];
    },
    [listFarmers.fulfilled]: (state, { payload }) => {
      state.farmers = payload;
      state.loading = false;
      state.farmersByProduct = [];
    },
    [listFarmers.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.farmers = [];
      state.farmersByProduct = [];
    },

    // listFarmersByProduct
    [listFarmersByProduct.pending]: (state) => {
      state.loading = true;
      state.farmersByProduct = [];
      state.farmers = [];
    },
    [listFarmersByProduct.fulfilled]: (state, { payload }) => {
      state.farmersByProduct = payload;
      state.loading = false;
      state.farmers = [];
    },
    [listFarmersByProduct.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.farmers = [];
      state.farmersByProduct = [];
    },
  },
});

export const farmerActions = farmerSlice.actions;
export default farmerSlice.reducer;
