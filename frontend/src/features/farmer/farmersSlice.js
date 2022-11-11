import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialFarmersState = {
  farmers: [],
  loading: false,
  error: null,
};

export const getFarmers = createAsyncThunk(
  'farmer/getFarmers',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/farmers');
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

const farmersSlice = createSlice({
  name: 'farmers',
  initialState: initialFarmersState,
  reducers: {},
  extraReducers: {
    //getFarmers
    [getFarmers.pending]: (state) => {
      state.loading = true;
      state.farmers = [];
    },
    [getFarmers.fulfilled]: (state, { payload }) => {
      state.farmers = payload;
      state.loading = false;
    },
    [getFarmers.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.farmers = [];
    },
  },
});

export const farmersActions = farmersSlice.actions;
export default farmersSlice.reducer;
