import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './QuizList.module.css';

export default class QuizList extends Component {
  renderQuizes() {
    return ['test1', 'test2', 'test3'].map((quiz, index) => {
      return (
        <li key={index}>
          <NavLink to={'/quiz/' + quiz}>Quiz # {quiz}</NavLink>
        </li>
      );
    });
  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Test list</h1>
          <ul>{this.renderQuizes()}</ul>
        </div>
      </div>
    );
  }
}
