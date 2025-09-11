import { createSlice } from "@reduxjs/toolkit";
import { IAuthLoginResponse } from "../api/dto/authDto";
import { login } from "../services/login";

interface AuthState {
  user: IAuthLoginResponse | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    });
    builder.addCase(login.rejected, (state) => {
      state.isLoading = false;
      state.error = null;
    });
  },
});

export const { actions: authActions, reducer: authReducer } = authSlice;
