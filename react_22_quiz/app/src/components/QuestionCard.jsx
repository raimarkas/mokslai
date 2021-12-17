import React from 'react';
import './QuestionCard.css'

const QuestionCard = ({
  showAnswers,
  handleNextQuestion,
  handleAnswer,
  data: { question, correct_answer, answers },
}) => {
  return (
    <div className='QandA-container'>
      <div className='question-container'>
        <h2 className='question-container__question' dangerouslySetInnerHTML={{ __html: question }} />
      </div>
      <div className='answer-container'>
        {answers.map((answer, i) => {
          const textColor = showAnswers
            ? answer === correct_answer
              ? 'text-true'
              : 'text-false'
            : 'text-original';
          return (
            <button key={i}
              className={`answer-container__button ${textColor}`}
              onClick={() => handleAnswer(answer)}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          );
        })}
      </div>
      {showAnswers && (
        <button onClick={handleNextQuestion} className='next-question'>
          Next Question
        </button>
      )}
    </div>
  );
};

export default QuestionCard;
