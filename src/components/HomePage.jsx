import React, { useState } from 'react'
import './HomePage.css'
import netflix_logo from '../images/netflix.png';
import SignIn from './SignIn';



const HomePage = () => {
  
    const[isOpen,setIsOpen]=useState(false);
  const signUpForm=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div className='homepage-content'>
   <div className='overlay'>
      <img src={netflix_logo} alt="logo" className='logo'/>
    <SignIn/>
    <div className='btn-container'>
      {!isOpen &&  <button className='btn' value={isOpen} onClick={signUpForm}>Sign In</button>}
     
      {isOpen && <SignIn/>}
    </div>
    </div>
    </div>
  )
}

export default HomePage
