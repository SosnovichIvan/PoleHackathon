import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginDto, RegisterDto, UserState } from "redux/auth/interface";
import { AsyncThunkConfig } from "redux/inerface";
import { loginUserApi, registerUserApi } from "../../api";

export const loginUser = createAsyncThunk<UserState, LoginDto, AsyncThunkConfig>(
  "auth/login",
  async (loginDto, { rejectWithValue }) => {
    try {
      return await loginUserApi(loginDto);
    } catch {
      return rejectWithValue("Ошибка авторизации");
    }
  },
);

export const registerUser = createAsyncThunk<UserState, RegisterDto, AsyncThunkConfig>(
  "auth/register",
  async (registerDto, { rejectWithValue }) => {
    try {
      return await registerUserApi(registerDto);
    } catch {
      return rejectWithValue("Ошибка регистрации");
    }
  },
);