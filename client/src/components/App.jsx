import Navbar from './navbar/Navbar';
import styles from './app.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Registration from './auth/Registration';
import Login from './auth/Login';
import { setAuth, auth } from '../reducers/userSlice';
import { useEffect } from 'react';

function App() {
  const isAuth = useSelector(store => store.user.isAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(auth());
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Hello, motherfuckers</h1>} />
        {!isAuth && (
          <>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />)
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
