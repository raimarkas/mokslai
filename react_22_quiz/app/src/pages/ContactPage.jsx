import React, { useState, useEffect, useRef } from 'react';
import './ContactPage.css'

const ContactPage = () => {
 // -- state
 const [username, setUsername] = useState('');
 const [email, setEmail] = useState('');
 const [text, setText] = useState('');

 const [validationMessage, setValidationMessage] = useState('');

 // -- ref
 let usernameInputRef = useRef(null);

 // -- side effect
 useEffect(() => {
   usernameInputRef.current.focus();
 }, []);

 // Functions
 const submitHandler = (e) => {
   e.preventDefault();

   console.log(username, email, text);
   
   // -- submit
     setValidationMessage('Thank you!');

 };

 return (
   <>
   <h1 className='contact-page-h1'>If you want to ask us a questions, DO IT RIGHT HERE ! 😜</h1>
     <form className='contact-form' onSubmit={submitHandler}>
       <div className='contact-form__input'>
         <label htmlFor='name'>User name</label>
         <br />
         <input
           type='text'
           value={username}
           onChange={(e) => setUsername(e.target.value)}
           ref={usernameInputRef}
         />
       </div>
       <div className='contact-form__input'>
         <label htmlFor='email'>Email</label>
         <br />
         <input
           type='email'
           value={email}
           onChange={(e) => setEmail(e.target.value)}
         />
       </div>
       <div className='contact-form__input'>
         <label htmlFor='password'>Your comment</label>
         <br />
         <textarea rows="5" cols='50' placeholder='Please write here what is on your...'
           type='text'
           value={text}
           onChange={(e) => setText(e.target.value)}
         />
       </div>
       <div>
         <input className='form-button' type='submit' value='Submit' />
       </div>
     </form>
     {validationMessage && <p style={{ textAlign: 'center'}}>{validationMessage}</p>}
   </>
 );
};

export default ContactPage
