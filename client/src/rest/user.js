import axios from 'axios';
import { setUser } from '../reducers/userSlice.js';
import store from '../store/store';
export const registration = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/registration', {
      email,
      password,
    });
    console.log(response.data.message);
  } catch (e) {
    alert(e.response.data);
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/login', {
      email,
      password,
    });
    console.log(response.data);
    store.dispatch(setUser(response.data));
    localStorage.setItem('token', response.data.token);
  } catch (e) {
    console.log(e);
    alert(e.response.data.message);
  }
};
