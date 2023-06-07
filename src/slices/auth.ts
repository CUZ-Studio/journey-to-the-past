import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: number;
  username: string;
  displayName: string;
}

interface AuthState {
  user: User | null;
  hasClientId: boolean;
}

const initialState: AuthState = {
  user: null,
  hasClientId: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authorize(state, action: PayloadAction<User | null>) {
      state.user = action.payload;
    },
    setHasClientId(state, action: PayloadAction<boolean>) {
      state.hasClientId = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { authorize, setHasClientId } = authSlice.actions;
