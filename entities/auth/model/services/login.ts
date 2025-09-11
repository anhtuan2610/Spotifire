import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthController } from "../api/controllers/authController";
import { IAuthLoginResponse, ILoginRequest } from "../api/dto/authDto";

export const login = createAsyncThunk<
  IAuthLoginResponse,
  ILoginRequest,
  { rejectValue: string }
>("auth/login", async (body, { rejectWithValue }) => {
  try {
    const response: IAuthLoginResponse = await AuthController.login(body);
    return response;
  } catch (error) {
    return rejectWithValue("Login failed. Please check your credentials.");
  }
});
