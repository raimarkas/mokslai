import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-logo'>
        <img src={logo} alt='logo'/>
      </div>
      <div className='header-navigation'>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home page</Link>
            </li>
            <li>
              <Link to='/quiz'>PLAY QUIZ</Link>
            </li>
            <li>
              <Link to='/about'>About game</Link>
            </li>
            <li>
              <Link to='/contact'>Contact us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;