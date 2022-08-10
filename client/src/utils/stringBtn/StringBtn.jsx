import React from 'react';
import styles from './stringBtn.module.scss';

export default function StringBtn({ children, ...props }) {
  const className = props.className ? [props.className, styles.btn].join(' ') : styles.btn;
  return (
    <button {...props} className={className}>
      {children}{' '}
    </button>
  );
}
