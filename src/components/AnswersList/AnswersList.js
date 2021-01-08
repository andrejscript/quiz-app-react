import React from 'react';
import AnswerItem from './AnswerItem/AnswerItem';
import classes from './AnswersList.module.css';

const AnswersList = ({answers}) => {
  return (
    <ul className={classes.AnswersList}>
      {answers.map((a, index) => {
        return <AnswerItem 
          answer={a}
          key={a.id}
           />;
      })}
    </ul>
  );
};

export default AnswersList;
