import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: {},
  isAuth: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload.user;
      if (action.payload.token) state.isAuth = true;
    },
    setAuth: (state, action) => {
      if (action.payload.token) state.isAuth = true;
    },
    logOut: state => {
      state.isAuth = false;
      state.user = {};
    },
  },
});

export const { setUser, setAuth, logOut } = userSlice.actions;
export default userSlice.reducer;
