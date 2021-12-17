import React, { useState, useEffect } from 'react';
import QuestionCard from '../components/QuestionCard';

const API_URL =
  'https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple';

export function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const questions = data.results.map((question) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0.5),
        }));

        setQuestions(questions);
      });
  }, []);

  const handleAnswer = (answer) => {
    if (!showAnswers) {
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      }
    }

    setShowAnswers(true);
  };

  const handleNextQuestion = () => {
    setCurrentIndex(currentIndex + 1);
    setShowAnswers(false);
  };

  const refreshPage = () => {
    console.log('Clicked');
    window.location.reload();
  };

  return questions.length > 0 ? (
    <div className='container'>
      {currentIndex >= questions.length ? (
        <>
          <h1
            style={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: '30px',
              fontWeight: 'bold',
              padding: '20px',
              margin: '10px 5px',
              textDecoration: 'none',
              color: '#c77529cb',
              WebkitTextStrokeWidth: '0.2px',
              WebkitTextStrokeColor: 'rgb(5, 3, 3)',
            }}
          >
            Game ended! Your Score is: {score}!
          </h1>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '15px',
            }}
          >
            <button className='main-btn' onClick={refreshPage}>
              PLAY QUIZ AGAIN
            </button>
          </div>
        </>
      ) : (
        <QuestionCard
          data={questions[currentIndex]}
          showAnswers={showAnswers}
          handleNextQuestion={handleNextQuestion}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  ) : (
    <h2 style={{ display: 'flex', justifyContent: 'center', margin: '15px' }}>
      Loading Questions...!
    </h2>
  );
}

export default QuizPage;
