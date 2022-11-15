import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialUserLoginState = {
  userInfo: null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk(
  'user/userLogin',
  async (_, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.post(
        '/api/users/login',
        { email, password },
        config
      );
      localStorage.setItem('userInfo', JSON.stringify(data));
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

const userLoginSlice = createSlice({
  name: 'userLogin',
  initialState: initialUserLoginState,
  reducers: {
    logout(state) {
      state.loading = false;
      state.userInfo = null;
      state.error = null;
    },
  },
  extraReducers: {
    // login
    [login.pending]: (state) => {
      state.loading = true;
      state.userInfo = null;
      state.error = null;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.userInfo = payload;
      state.loading = false;
      state.error = null;
    },
    [login.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.userInfo = null;
    },
  },
});

export const userLoginActions = userLoginSlice.actions;
export default userLoginSlice.reducer;
