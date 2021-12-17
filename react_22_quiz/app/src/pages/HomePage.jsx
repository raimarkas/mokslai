import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'

const HomePage = () => {

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '15px'}}>
        <Link className='main-btn' to='/quiz'>
          PLAY QUIZ
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
