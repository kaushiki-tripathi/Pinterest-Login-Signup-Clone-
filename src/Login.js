import React, { useState } from 'react';
import { Link } from'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
function Login() {
  
  const loginWithGoogleHandler = useGoogleLogin({
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



  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    setEmailError('');
    setPasswordError('');
    if (!email) {
      setEmailError("You missed a spot! Don't forget to add your email.");
      isValid = false;
      
    } else {
      setEmailError('');
    }
  
    if (!password) {
      setPasswordError("Oops! Password can't be empty.");
      isValid = false;
      
    } else {
      setPasswordError('');
    }

    if (isValid) {
      const dummyPassword = 'test123'; // Replace this with actual auth logic
    if (password !== dummyPassword) {
      setPasswordError('The password you entered is incorrect.');
    }
    else{
      console.log('Login Successful');
    }
  }
    console.log('Email: ', email);
    console.log('Password: ', password);
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
            placeholder='Password'
            className={`input ${passwordError ? 'input-error' : ''}`}  
            value={password} onChange={(e) => setPassword(e.target.value)} 
            />
            {passwordError && <p className='error-text'>{passwordError}</p>}
            
            <p className='forgot-password'>Forgot your password?</p>
           
            <button className='login-btn' type='submit'>Login</button>
          </form>
            <span>OR</span>


            <button className='google-btn' onClick={()=>loginWithGoogleHandler()}>
                <img src='./google.png' alt='logo'/>
                Continue with Google 
            </button>
            
            <p className='terms'>By, continuing, you agree to Pinterest's Terms of Service
              and acknowledge you've read out Privacy Policy. Notice at collection.<br/>
              <p className='signup-text' style={{ color: "#555" }}>Not on Pinterest yet? <Link to="/signup" style={{ color: "#111", fontWeight: "bold", cursor: "pointer", textDecoration: "none" }}>Sign up</Link></p>
              <p style={{ color: "#555" }}>Are you a business? <strong style={{ color: "#111", cursor: "pointer" }}>Get started here!</strong></p>
            </p>
            
        </div>
    </div>
  )
}

export default Login;
