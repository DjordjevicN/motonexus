import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  auth: { id: string; email: string; displayName: string } | null;
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
