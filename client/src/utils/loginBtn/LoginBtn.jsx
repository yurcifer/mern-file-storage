import React from 'react';
import styles from './loginBtn.module.scss';

export default function LoginBtn({ children, ...props }) {
  const className = props.className ? [props.className, styles.btn].join(' ') : styles.btn;
  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
}
