import React, { Component } from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
import classes from './Quiz.module.css';

export default class Quiz extends Component {
  state = {
    activeQuestionCount: 0,
    answerStatus: null, // {id: 'success, 'wrong'} текущий клик (выбор) пользова
    isFinished: false,
    quiz: [
      {
        id: 1,
        question: 'Who was C. Dickens?',
        rightAnswerId: 3,
        answers: [
          { text: 'sailor', id: 1 },
          { text: 'medic', id: 2 },
          { text: 'writer', id: 3 },
          { text: 'architector', id: 4 },
        ],
      },
      {
        id: 2,
        question: 'When was founded NY',
        rightAnswerId: 2,
        answers: [
          { text: '1658', id: 1 },
          { text: '1653', id: 2 },
          { text: '1702', id: 3 },
          { text: '1677', id: 4 },
        ],
      },
      {
        id: 3,
        question: 'When was America discovered?',
        rightAnswerId: 4,
        answers: [
          { text: '1462', id: 1 },
          { text: '1488', id: 2 },
          { text: '1502', id: 3 },
          { text: '1492', id: 4 },
        ],
      },
      {
        id: 4,
        question: 'Who was the first US president?',
        rightAnswerId: 1,
        answers: [
          { text: 'George Washington', id: 1 },
          { text: 'James Monroe', id: 2 },
          { text: 'John Tyler', id: 3 },
          { text: 'Abraham Lincoln', id: 4 },
        ],
      },
    ],
  };

  // Обработка клика по варианту ответа
  onAnswerClickHandler = (answerId) => {
    if (this.state.answerStatus) {
      return;
    }

    const currentQuestion = this.state.quiz[this.state.activeQuestionCount];

    //проверка выбора пользователя
    if (currentQuestion.rightAnswerId === answerId) {
      this.setState({
        answerStatus: { [answerId]: 'success' },
      });
      this.goNextQuestion();
    } else {
      this.setState({
        answerStatus: { [answerId]: 'wrong' },
      });
      this.goNextQuestion();
    }
  };

  //Переход к след. вопросу
  goNextQuestion = () => {
    const timeout = window.setTimeout(() => {
      if (this.isQuizFinished()) {
        this.setState({
          isFinished: true,
        });
      } else {
        this.setState({
          activeQuestionCount: this.state.activeQuestionCount + 1,
          answerStatus: null,
        });
      }

      window.clearTimeout(timeout);
    }, 1000);
  };

  //Конец теста
  isQuizFinished() {
    return this.state.activeQuestionCount + 1 === this.state.quiz.length;
  }

  render() {
    const { quiz, activeQuestionCount, answerStatus, isFinished } = this.state;

    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Answer all questions</h1>
          {isFinished ? (
            <FinishedQuiz 
              
            />
          ) : (
            <ActiveQuiz
              quizLength={quiz.length}
              answers={quiz[activeQuestionCount].answers}
              question={quiz[activeQuestionCount].question}
              onAnswerClick={this.onAnswerClickHandler}
              activeQuestionNum={activeQuestionCount + 1}
              answerStatus={answerStatus}
            />
          )}
        </div>
      </div>
    );
  }
}
