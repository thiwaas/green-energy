/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/api'

export const admin_login = createAsyncThunk(
  'auth/admin_login',
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post('/admin-login', info, { withCredentials: true });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const authReducer = createSlice({
  name: 'auth',
  initialState: {
    successMessage: '',
    errorMessage: '',
    loader: false,
    userInfo: ''
  },
  reducers: {
    increment(state) {
      state.value++;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(admin_login.pending, (state, _) => {
        state.loader = true;
      })
      .addCase(admin_login.rejected, (state, {payload}) => {
        state.loader = false;
        state.errorMessage = payload.payload || 'Password Wrong';
      })
  }
});

export const { increment } = authReducer.actions;
export default authReducer.reducer;
