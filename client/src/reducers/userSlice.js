import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  currentUser: {},
  isAuth: false,
};

export const auth = createAsyncThunk('user/auth', async (_, { rejectWithValue, dispatch }) => {
  try {
    const res = await axios.get('http://localhost:5000/api/auth/auth', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    console.log(res.data);
    dispatch(setUser(res.data.user));
    localStorage.setItem('token', res.data.token);
  } catch (e) {
    console.log(e.response.data.message);
    localStorage.removeItem('token');
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload.user;
      state.isAuth = true;
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
