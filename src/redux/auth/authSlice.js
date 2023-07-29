import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refresh, register } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleSignUpUser = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleLoginUser = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleLogOutUser = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handleRefreshUserPending = state => {
  state.isRefreshing = true;
};

const handleRefreshUserFulfilled = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleRefreshUserRejected = state => {
  state.isRefreshing = false;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, handleSignUpUser)
      .addCase(login.fulfilled, handleLoginUser)
      .addCase(logout.fulfilled, handleLogOutUser)
      .addCase(refresh.pending, handleRefreshUserPending)
      .addCase(refresh.fulfilled, handleRefreshUserFulfilled)
      .addCase(refresh.rejected, handleRefreshUserRejected),
});

export const authReducer = authSlice.reducer;
