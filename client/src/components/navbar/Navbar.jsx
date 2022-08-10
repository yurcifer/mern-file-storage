import React from 'react';
import styles from './navbar.module.scss';
import logo from '../../assets/images/navbarLogo.svg';
import NavLink from '../../utils/navLink/NavLink';
import StringBtn from '../../utils/stringBtn/StringBtn';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../reducers/userSlice';

function Navbar() {
  const isAuth = useSelector(store => store.user.isAuth);
  const dispatch = useDispatch();
  const signOut = () => {
    localStorage.removeItem('token');
    dispatch(setAuth(null));
  };
  return (
    <div className={styles.navbar}>
      <img src={logo} alt="" className={styles.logo} />
      <div className={styles.header}>MERN STORAGE</div>
      <div className={styles.filler}></div>
      <div className={styles.auth}>
        {isAuth ? (
          <StringBtn className={styles.btn} onClick={signOut}>
            Sign out
          </StringBtn>
        ) : (
          <>
            <div className={styles.login}>
              <NavLink to="/login">Login</NavLink>
            </div>
            <div className={styles.registration}>
              <NavLink to="/registration">Registration</NavLink>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
