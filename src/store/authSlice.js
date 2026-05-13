import { createSlice } from '@reduxjs/toolkit';

const stored = localStorage.getItem('auth');
const initial = stored ? JSON.parse(stored) : { user: null, token: null };

const authSlice = createSlice({
  name: 'auth',
  initialState: initial,
  reducers: {
    setCredentials: (state, action) => {
      state.user  = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem('auth', JSON.stringify({ user: state.user, token: state.token }));
    },
    logout: (state) => {
      state.user  = null;
      state.token = null;
      localStorage.removeItem('auth');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
