import React, { useState } from 'react';
import styles from './registration.module.scss';
import Input from '../../utils/input/input';
import LoginBtn from '../../utils/loginBtn/LoginBtn';

function Registration() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const clickHandler = () => {
    setLogin('');
    setPassword('');
  };
  return (
    <div className={styles.container}>
      <h3>Registration</h3>
      <Input
        type="text"
        placeholder="Введите email..."
        value={login}
        onChange={e => setLogin(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Придумайте надёжный пароль..."
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <LoginBtn onClick={clickHandler} className={styles.btn}>
        Sign up
      </LoginBtn>
    </div>
  );
}

export default Registration;
