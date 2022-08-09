import React from 'react';
import styles from './navbar.module.scss';
import logo from '../../assets/images/navbarLogo.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <img src={logo} alt="" className={styles.logo} />
      <div className={styles.header}>MERN STORAGE</div>
      <div className={styles.login}>
        <Link to="/login">Login</Link>
      </div>
      <div className={styles.registration}>
        <Link to="/registration">Registration</Link>
      </div>
    </div>
  );
}

export default Navbar;
