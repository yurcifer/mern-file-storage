import React from 'react';
import Input from '../../utils/input/input';
import LoginBtn from '../../utils/loginBtn/LoginBtn';
import styles from './login.module.scss';

function Login() {
    return (
      <div className={styles.container}>
        <h3>Login</h3>
        <Input type="text" placeholder="Введите email..." />
        <Input type="password" placeholder="Введите пароль..." />
        <LoginBtn className={styles.btn} >Sign in</LoginBtn>
      </div>
    );
  }

export default Login;
