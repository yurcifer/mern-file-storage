import React from 'react';
import styles from './navbar.module.scss';
import logo from '../../assets/images/navbarLogo.svg';
import NavLink from '../../utils/navLink/NavLink';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <img src={logo} alt="" className={styles.logo} />
      <div className={styles.header}>MERN STORAGE</div>
      <div className={styles.login}>
        <NavLink to="/login">
          Login
        </NavLink>
      </div>
      <div className={styles.registration}>
        <NavLink to="/registration">Registration</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
