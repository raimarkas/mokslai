import React, { useState, useEffect, useRef } from 'react';
// import useFetch from '../hooks/useFetch.js';

const Form = () => {
  // -- state
//   const [loading, error] = useFetch('register');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [validationMessage, setValidationMessage] = useState('');

  // -- ref
  let usernameInputRef = useRef(null);
  let passwordInputRef = useRef(null);

  // -- side effect
  useEffect(() => {
    usernameInputRef.current.focus();
  }, []);

  // Functions
  const submitHandler = (e) => {
    e.preventDefault();

    console.log(username, email, password);
    // -- password lenght validation
    if (password.length < 8) {
      setPassword('');
      passwordInputRef.current.focus();
      setValidationMessage('Password must be 8 or more characters lenght');
    }

    // ----- SENDING DATA TO API and more.....
  };

  return (
//    loading ? (
//     <p>Loading...</p>
//   ) : error ? (
//     <p>{error}</p>
//   ) : (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='name'>User name</label>
          <br />
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            ref={usernameInputRef}
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <br />
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='password'>Pasword</label>
          <br />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ref={passwordInputRef}
          />
        </div>
        <div>
          <input type='submit' value='Register' />
        </div>
      </form>
      {validationMessage && <p>{validationMessage}</p>}
    </>
  );
};

export default Form;
