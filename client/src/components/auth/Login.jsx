import React, { useState } from 'react';
import Input from '../../utils/input/input';
import LoginBtn from '../../utils/loginBtn/LoginBtn';
import styles from './auth.module.scss';
import { login } from '../../rest/user'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const clickHandler = () => {
    login(email, password)
    // login(login, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.container}>
      <h3>Login</h3>
      <Input type="text" placeholder="Введите email..." value={email} setValue={setEmail} />
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
