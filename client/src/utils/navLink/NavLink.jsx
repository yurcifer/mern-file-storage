import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navLink.module.scss'

function NavLink({ children, ...props }) {
  return <Link className={styles.link} {...props}>{children}</Link>;
}

export default NavLink;
