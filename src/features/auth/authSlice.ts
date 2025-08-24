import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/userTypes";

interface AuthState {
  auth: IUser | null;
}

const initialState: AuthState = {
  auth: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<AuthState["auth"]>) {
      state.auth = action.payload;
    },
    clearAuth(state) {
      state.auth = null;
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
