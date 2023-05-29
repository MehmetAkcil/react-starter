import { createSlice } from '@reduxjs/toolkit';



const initialState = {
  userData: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : false, // for user object
  token: localStorage.getItem('token') ? localStorage.getItem('token') : false,
  status: null,
  error: null
}


export const AuthStore = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: async (state, action) => {
      console.log(action.payload)
      state.userData = action.payload.data;
      state.token = action.payload.token;
      localStorage.setItem('user', JSON.stringify(action.payload.data));
      localStorage.setItem('token', action.payload.token);
    },
    logout: (state) => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      state.userData = false;
      state.token = false;
    }
  }
});


export const { login, logout } = AuthStore.actions;
export default AuthStore.reducer;
