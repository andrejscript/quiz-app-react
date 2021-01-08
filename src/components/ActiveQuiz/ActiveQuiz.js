import React from 'react';
import AnswersList from './AnswersList/AnswersList'
import classes from './ActiveQuiz.module.css';

const ActiveQuiz = (props) => {
  const {
    quizLength,
    activeQuestionNum,
    answers, 
    question,
    answerStatus,
    onAnswerClick
  } = props;
  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.Question}>
        <span>
          <strong>{activeQuestionNum}.</strong>&nbsp; 
          {question}
        </span>

        <small>
          {activeQuestionNum} from {quizLength}
        </small>
      </p>

     <AnswersList 
      answers={answers}
      answerStatus={answerStatus}
      onAnswerClick={onAnswerClick}
      />
    </div>
  );
};

export default ActiveQuiz;
