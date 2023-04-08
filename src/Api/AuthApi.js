import axios from './axios'
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk("auth/login", async ({ email, password }) => {

    const response = await axios.post(`User?Mail=${email}&Password=${password}`);

    return response.data;
});
