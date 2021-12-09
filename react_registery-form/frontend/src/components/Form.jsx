import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'

const Form = () => {
  // -- state
//   const [loading, error] = useFetch('register');
  const [username, setUsername] = useState('');
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const [validationMessage, setValidationMessage] = useState('');

  const visitor = {username, surname, email, age}
  
  const register = () => {
      const {username, surname, email, age} = visitor
      if (username && surname && email && age) {
        setValidationMessage('Thank you for your registration')
        axios.post('http://localhost:5000/api/visitors', visitor)
        .then (res => console.log(res))
      } else {
        setValidationMessage('Put all information')
      }
      
  }

  // -- ref
  let usernameInputRef = useRef(null);
  let ageInputRef = useRef(null);

  // -- side effect
  useEffect(() => {
    usernameInputRef.current.focus();
  }, []);

  // Functions
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(username, surname, email, age);

    // -- age validation
    if (age > '2016-01-01') {
      setAge('');
      ageInputRef.current.focus();
      setValidationMessage('Sorry you can not register to event, because you are under 5');
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
          <label htmlFor='name'>Your name</label>
          <br />
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            ref={usernameInputRef}
          />
        </div>
        <div>
          <label htmlFor='name'>Your surname</label>
          <br />
          <input
            type='text'
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
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
            type='date'
            value={age}
            onChange={(e) => setAge(e.target.value)}
            ref={ageInputRef}
          />
        </div>
        <div>
          <input type='submit' value='Register' onClick={register}/>
        </div>
      </form>
      {validationMessage && <p>{validationMessage}</p>}
    </>
  );
};

export default Form;
