import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './Drawer.module.css';

const links = [
  { to: '/', label: 'List', exact: true },
  { to: '/auth', label: 'Log in', exact: false },
  { to: '/quiz-creator', label: 'Add test', exact: false },
];

export default class Drawer extends Component {

  renderLinks() {
    return links.map((link, index) => {
      const {to, exact, label} = link;
      return (
        <li key={index}>
          <NavLink 
            to={to} 
            exact={exact}
            activeClassName={classes.active}
            onClick={this.props.onClose}
            >
            {label}
          </NavLink>
        </li>
      );
    });
  }

  render() {
    const { isOpen, onClose } = this.props,
      cls = [classes.Drawer];

    if (!isOpen) {
      cls.push(classes.close);
    }

    return (
      <>
        <nav className={cls.join(' ')}>
          <ul>{this.renderLinks()}</ul>
        </nav>
        {isOpen ? <Backdrop onClick={onClose} /> : null}
      </>
    );
  }
}
