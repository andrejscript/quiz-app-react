import React from 'react';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';
import classes from './FinishedQuiz.module.css';

const FinishedQuiz = ({ quiz, results, onRetry }) => {
  const successCount = Object.keys(results).reduce((acc, key) => {
    if (results[key] === 'success') {
      acc++;
    }
    return acc;
  }, 0);

  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {quiz.map((quizItem, index) => {
          const iconCls = [
            'fa',
            results[quizItem.id] === 'success' ? 'fa-check' : 'fa-times',
            classes[results[quizItem.id]],
          ];

          return (
            <li key={quiz[index].id}>
              <strong>{index + 1}</strong>.&nbsp;
              {quizItem.question}
              <i className={iconCls.join(' ')}></i>
            </li>
          );
        })}
      </ul>

      <p>
        Правильно {successCount} из {quiz.length}
      </p>
      <div>
        <Button type='primary' onClick={onRetry}>
          Repeat test
        </Button>
        <Link to='/'>
          <Button type='success'>Go to Quiz list</Button>
        </Link>
      </div>
    </div>
  );
};

export default FinishedQuiz;
