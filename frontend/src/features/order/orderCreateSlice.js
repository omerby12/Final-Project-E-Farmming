import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialOrderCreateState = {
  order: {},
  success: false,
  loading: false,
  error: null,
};

export const orderCreate = createAsyncThunk(
  'order/orderCreate',
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

const orderCreateSlice = createSlice({
  name: 'orderCreate',
  initialState: initialOrderCreateState,
  reducers: {},
  extraReducers: {
    // createOrder
    [orderCreate.pending]: (state) => {
      state.loading = true;
      state.order = null;
      state.success = false;
      state.error = null;
    },
    [orderCreate.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.order = payload;
    },
    [orderCreate.rejected]: (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
      state.order = null;
    },
  },
});

export const orderCreateActions = orderCreateSlice.actions;
export default orderCreateSlice.reducer;
