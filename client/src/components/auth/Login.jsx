import React, { useState } from 'react';
import Input from '../../utils/input/input';
import LoginBtn from '../../utils/loginBtn/LoginBtn';
import styles from './auth.module.scss';
import { login } from '../../rest/user';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e && e.preventDefault();
    login(email, password);
    // login(login, password);
    setEmail('');
    setPassword('');
  };

  return (
    <form className={styles.container} onSubmit={e => submitHandler(e)}>
      <h3>Login</h3>
      <Input type="text" placeholder="Введите email..." value={email} setValue={setEmail} />
      <Input
        type="password"
        placeholder="Введите пароль..."
        value={password}
        setValue={setPassword}
      />
      <LoginBtn onClick={submitHandler} className={styles.btn}>
        Sign in
      </LoginBtn>
    </form>
  );
}

export default Login;
