import React from 'react';
import styles from './navbar.module.scss';
import logo from '../../assets/images/navbarLogo.svg';
import NavLink from '../../utils/navLink/NavLink';
import StringBtn from '../../utils/stringBtn/StringBtn';
import { useDispatch, useSelector } from 'react-redux';
import { logOut as logOutAction } from '../../reducers/userSlice';

function Navbar() {
  const isAuth = useSelector(store => store.user.isAuth);
  const dispatch = useDispatch();
  const logOut = () => {
    localStorage.removeItem('token');
    dispatch(logOutAction());
  };
  return (
    <div className={styles.navbar}>
      <img src={logo} alt="" className={styles.logo} />
      <div className={styles.header}>MERN STORAGE</div>
      <div className={styles.filler}></div>
      <div className={styles.auth}>
        {isAuth && (
          <StringBtn className={styles.btn} onClick={logOut}>
            Sign out
          </StringBtn>
        )}
        {!isAuth && (
          <div className={styles.login}>
            <NavLink to="/login">Login</NavLink>
          </div>
        )}
        {!isAuth && (
          <div className={styles.registration}>
            <NavLink to="/registration">Registration</NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
