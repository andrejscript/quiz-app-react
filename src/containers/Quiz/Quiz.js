import React, { Component } from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import classes from './Quiz.module.css';

export default class Quiz extends Component {
  state = {
    quiz: [
      {
        answers: [
          { text: 'Who was C. Dickens?', id: 1 },
          { text: 'When was founded NY?', id: 2 },
          { text: 'Who was America discoverd?', id: 3 },
          { text: 'Who was the first US president?', id: 4 },
        ],
      },
    ],
  };
  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Answer all questions</h1>
          <ActiveQuiz answers={this.state.quiz[0].answers} />
        </div>
      </div>
    );
  }
}
