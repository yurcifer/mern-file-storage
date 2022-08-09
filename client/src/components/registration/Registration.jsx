import React from 'react';
import styles from './registration.module.scss';
import Input from '../../utils/input/input';
import LoginBtn from '../../utils/loginBtn/LoginBtn';

function Registration() {
  return (
    <div className={styles.container}>
      <h3>Registration</h3>
      <Input type="text" placeholder="Введите email..." />
      <Input type="password" placeholder="Придумайте надёжный пароль..." />
      <LoginBtn className={styles.btn}>Sign up</LoginBtn>
    </div>
  );
}

export default Registration;
