import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useGoogleLogin } from '@react-oauth/google';
function Signup() {
  
  const loginWithGoogle = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log("Google login successful:", tokenResponse);
    },
    onError: () => {
      console.log("Login Failed");
    }
  });

  const[email, setEmail] = useState('');
  const[emailError, setEmailError] = useState('');
  const[password, setPassword] = useState('');
  const[passwordError, setPasswordError] = useState('');
  const[birthdate, setBirthdate] = useState('');
  const[birthdateError, setBirthdateError] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      setEmailError("You missed a spot! Don't forget to add your email.");
      
    } else {
      setEmailError('');
    }
  
    if (!password) {
      setPasswordError("Oops! Password can't be empty.");
      
    } else {
      setPasswordError('');
    }
  
    if (!birthdate) {
      setBirthdateError("Don't forget to add your birthdate.");
      
    } else {
      setBirthdateError('');
    }
    
    console.log('Email: ', email);
    console.log('Password: ', password);
    console.log('Birthdate: ', birthdate);
  };

  return (
    <div className='App'>
        <div className='logo-box'>
            <img src='./Pinterest.png' alt='logo' className='logo'/>
            <h2>Welcome to Pinterest</h2>
            <p>Find new ideas to try</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Email</label>
            <input 
            type='text' 
            id='email' 
            placeholder='Email' 
            className={`input ${emailError ? 'input-error' : ''}`} 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className='error-text'>{emailError}</p>}

            <label htmlFor='password'>Password</label>
            <input 
            type='password' 
            id='password' 
            placeholder='Create a password'
            className={`input ${passwordError ? 'input-error' : ''}`}  
            value={password} onChange={(e) => setPassword(e.target.value)} 
            />
            {passwordError && <p className='error-text'>{passwordError}</p>}
            
            <label htmlFor='birthdate'>Birthdate</label>
            <input 
            type='date' 
            id='birthdate' 
            placeholder='dd-mm-yyyy' 
            className={`input ${birthdateError ? 'input-error' : ''}`} 
            value={birthdate} onChange={(e) => setBirthdate(e.target.value)}
            />
            {birthdateError && <p className='error-text'>{birthdateError}</p>}
           
            <button type='submit'>Continue</button>
          </form>
            <span>OR</span>

            <button className='google-btn' onClick={()=>loginWithGoogle()}>
                <img src='./google.png' alt='logo'/>
                Continue with Google 
            </button>
            
            <p className='terms'>By, continuing, you agree to Pinterest's Terms of Service
              and acknowledge you've read out Privacy Policy. Notice at collection.<br/>
            </p>
            <p className='signup-text' style={{ color: "#555" }}>Already a member? <Link to="/" style={{ color: "#111", fontWeight: "bold", cursor: "pointer", textDecoration: "none" }}>Log in</Link></p>
            <div className='footer'>
              <h2>Create a free business account</h2>
            </div>
        </div>
    </div>
  )
}

export default Signup;
