import React from "react";
import classes from './MenuToggle.module.css';

const MenuToggle = props => {
  const menuCls = [
    classes.MenuToggle,
    'fa'
  ];

  if (props.isOpen) {
    menuCls.push('fa-times')
    menuCls.push(classes.open)
  } else {
    menuCls.push('fa-bars')
  }

  return (
    <i
      className={menuCls.join(' ')}
      onClick={props.onToggle}
    />
  )
}

export default MenuToggle;