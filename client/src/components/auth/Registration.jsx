import React, { useState } from 'react';
import styles from './auth.module.scss';
import Input from '../../utils/input/input';
import LoginBtn from '../../utils/loginBtn/LoginBtn';
import { registration } from '../../rest/user';

function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const clickHandler = () => {
    registration(email, password);
    setEmail('');
    setPassword('');
  };
  return (
    <div className={styles.container}>
      <h3>Registration</h3>
      <Input type="text" placeholder="Введите email..." value={email} setValue={setEmail} />
      <Input
        type="password"
        placeholder="Придумайте надёжный пароль..."
        value={password}
        setValue={setPassword}
      />
      <LoginBtn onClick={clickHandler} className={styles.btn}>
        Sign up
      </LoginBtn>
    </div>
  );
}

export default Registration;
