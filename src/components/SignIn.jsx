import React, { useState } from 'react';
import './SignIn.css'
import Container from './UI/Container';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email,setEmail]=useState('');
  const[password,setPassword]= useState('');
  const onEmailChange=(event)=>{
setEmail(event.target.value);
  }
  const onPasswordChange=(event)=>{
setPassword(event.target.value);
  }
  const onSubmitHandler=(event)=>{
    event.preventDefault();
    console.log(email);
    console.log(password);
    setEmail('');
    setPassword('');
  }

  return (
    <Container>
    
    <h2 className='content-color'>Sign In</h2>
      <form onSubmit={onSubmitHandler}>
  <div className='content-color' >
    <label for="exampleInputEmail1" >Email address</label><br/><br/>
    <input className='input-content' type="email" placeholder='Email or phone number' name="email" value={email} onChange={onEmailChange}/>
    <br/><br/>
  </div>
  <div className='content-color'>
    <label for="exampleInputPassword1" name="password" value={password} placeholder='Password' onChange={onPasswordChange}>Password</label><br/>
    <br/><br/> <input className='input-content'type="password"/>
  </div>
<br/><br/>

  <button type="submit" className='submit-btn'>Submit</button>
</form>
<br/>
<br/>

<span className='signup-text' >New to Netflix?</span>
<a className='signup-link'>  Sign up now.</a><br/><br/>
<span className='para'> This page is protected by Google reCAPTCHA to ensure you're not a bot.</span><a className='link'> Learn more.</a>
</Container>
  )
}

export default SignIn
