import React from 'react';
import classes from './AnswerItem.module.css';

const AnswersItem = ({ answer, answerStatus, onAnswerClick }) => {

  const itemClasses = [classes.AnswerItem];

  if (answerStatus) {
      itemClasses.push(classes[answerStatus])
  }

  return (
    <li 
      className={itemClasses.join(' ')} 
      onClick={() => onAnswerClick(answer.id)}>
      {answer.text}
    </li>
  );
};

export default AnswersItem;
