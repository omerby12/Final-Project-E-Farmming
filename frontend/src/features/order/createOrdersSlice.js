import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialCreateOrdersState = {
  orders: {},
  success: false,
  loading: false,
  error: null,
};

export const createOrders = createAsyncThunk(
  'order/createOrders',
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

const createOrdersSlice = createSlice({
  name: 'createOrders',
  initialState: initialCreateOrdersState,
  reducers: {},
  extraReducers: {
    // setShippingAddress
    [createOrders.pending]: (state) => {
      state.loading = true;
      state.orders = null;
      state.success = false;
      state.error = null;
    },
    [createOrders.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.orders = payload;
    },
    [createOrders.rejected]: (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
      state.orders = null;
    },
  },
});

export const createOrdersActions = createOrdersSlice.actions;
export default createOrdersSlice.reducer;
