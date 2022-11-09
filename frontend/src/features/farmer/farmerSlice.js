import { createSlice } from '@reduxjs/toolkit';
import { listFarmers } from './farmerThunk';

const initialFarmerState = { farmers: [], loading: false, error: null };

const farmerSlice = createSlice({
  name: 'farmer',
  initialState: initialFarmerState,
  reducers: {},
  extraReducers: {
    // listFarmers
    [listFarmers.pending]: (state) => {
      state.loading = true;
      state.farmers = [];
    },
    [listFarmers.fulfilled]: (state, { payload }) => {
      state.farmers = payload;
      state.loading = false;
    },
    [listFarmers.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const farmerActions = farmerSlice.actions;
export default farmerSlice.reducer;
