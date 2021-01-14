import React from 'react';
import AnswerItem from './AnswerItem/AnswerItem';
import classes from './AnswersList.module.css';

const AnswersList = ({ answers, answerStatus, onAnswerClick }) => {
  return (
    <ul className={classes.AnswersList}>
      {answers.map(a => {
        return (
          <AnswerItem
            key={a.id}
            answer={a}
            answerStatus={answerStatus ? answerStatus[a.id] : null}
            onAnswerClick={onAnswerClick}
          />
        );
      })}
    </ul>
  );
};

export default AnswersList;
