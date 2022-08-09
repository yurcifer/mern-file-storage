import React from 'react';
import './input.module.scss';

function Input({setValue, ...props}) {
  return <input {...props} onChange={e => setValue(e.target.value)} />;
}

export default Input;
