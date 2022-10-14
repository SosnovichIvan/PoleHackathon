import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./interface";
import { loginUser, registerUser } from "./actions";

const initialState: AuthState = {
  user: {
    id: null,
    name: null,
    email: null,
    position: null,
  },
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: ( builder) => {
    builder
      .addCase(loginUser.pending, (draft) => {
        draft.error = null;
        draft.isLoading = true;
        draft.user = null;
      })
      .addCase(loginUser.fulfilled, (draft, { payload }) => {
        draft.error = null;
        draft.isLoading = false;
        draft.user = payload;
      })
      .addCase(loginUser.rejected, (draft, { payload }) => {
        draft.error = payload;
        draft.isLoading = false;
        draft.user = null;
      })
      .addCase(registerUser.pending, (draft) => {
        draft.error = null;
        draft.isLoading = true;
        draft.user = null;
      })
      .addCase(registerUser.fulfilled, (draft, { payload }) => {
        draft.error = null;
        draft.isLoading = false;
        draft.user = payload;
      })
      .addCase(registerUser.rejected, (draft, { payload }) => {
        draft.error = payload;
        draft.isLoading = false;
        draft.user = null;
      });
  },
},
);

export default authSlice.reducer;