import React from 'react';
import about from '../assets/trivia.jpg';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className='about-page'>
      <h1 className='about-page__h1'>We love the questions and answers</h1>
      <div className='about-page--div'>
        <img className='about-page--div__img' src={about} alt='' />
        <p className='about-page--div__text'>
          A quiz is a form of game or mind sport in which players attempt to
          answer questions correctly about a certain or variety of subjects.
          Quizzes can be used as a brief assessment in education and similar
          fields to measure growth in knowledge, abilities, or skills. They can
          also be televised for entertainment purposes, often in a game show
          format.
          <br />
          This page is created to entertain you in any moment you feel your self
          a little bit sad 😉
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
