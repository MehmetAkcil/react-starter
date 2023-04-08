import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '../Api/AuthApi';

const initialState = {
  userData: localStorage.getItem('user') ?? false, // for user object
  token: localStorage.getItem('token') ?? false,
  status: null,
  error: null
}


export const AuthStore = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userData = action.payload.data;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});


export const { userData, token, status, error } = AuthStore.actions;
export default AuthStore.reducer;
