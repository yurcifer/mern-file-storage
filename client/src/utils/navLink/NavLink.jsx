import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navLink.module.scss';

function NavLink({ children, ...props }) {
  const className = props.className ? [props.className, styles.btn].join(' ') : styles.btn;
  return (
    <Link {...props} className={className}>
      {children}
    </Link>
  );
}

export default NavLink;
