import React from 'react';
import classes from './Button.module.css';


const Button = props => {
  const btnCls = [
    classes.Button,
    classes[props.type]
  ]

  return (
  <button
    className={btnCls.join(' ')}
    onClick={props.onClick}
    disabled={props.disabled}>
    {props.children}
  </button>
  )
}

export default Button;
