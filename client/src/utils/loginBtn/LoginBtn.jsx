import React from 'react'
import './loginBtn.module.scss'

export default function LoginBtn({children, ...props}) {
  return (
    <button {...props}>{children}</button>
  )
}
