import React, { useState } from 'react';
import Input from '../../utils/input/input';
import LoginBtn from '../../utils/loginBtn/LoginBtn';
import styles from './login.module.scss';

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const clickHandler = () => {
    setLogin('');
    setPassword('');
  };

  return (
    <div className={styles.container}>
      <h3>Login</h3>
      <Input
        type="text"
        placeholder="Введите email..."
        value={login}
        setValue={setLogin}
      />
      <Input
        type="password"
        placeholder="Введите пароль..."
        value={password}
        setValue={setPassword}
      />
      <LoginBtn onClick={clickHandler} className={styles.btn}>
        Sign in
      </LoginBtn>
    </div>
  );
}

export default Login;
