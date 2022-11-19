import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialCreateOrderState = {
  order: {},
  success: false,
  loading: false,
  error: null,
};

export const createOrder = createAsyncThunk(
  'order/createOrder',
  async ({ order }, { getState, rejectWithValue }) => {
    try {
      const userInfo = getState().user.userInfo;
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(`/api/orders`, order, config);
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

const createOrderSlice = createSlice({
  name: 'createOrder',
  initialState: initialCreateOrderState,
  reducers: {},
  extraReducers: {
    // createOrder
    [createOrder.pending]: (state) => {
      state.loading = true;
      state.order = null;
      state.success = false;
      state.error = null;
    },
    [createOrder.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.order = payload;
    },
    [createOrder.rejected]: (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
      state.order = null;
    },
  },
});

export const createOrderActions = createOrderSlice.actions;
export default createOrderSlice.reducer;
