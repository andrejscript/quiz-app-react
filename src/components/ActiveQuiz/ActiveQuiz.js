import React from 'react';
import AnswersList from '../AnswersList/AnswersList'
import classes from './ActiveQuiz.module.css';

const ActiveQuiz = ({answers}) => {
  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.Question}>
        <span>
          <strong>1.</strong>&nbsp; How are you?
        </span>

        <small>
          4 from 12
        </small>
      </p>

     <AnswersList answers={answers} />
    </div>
  );
};

export default ActiveQuiz;
