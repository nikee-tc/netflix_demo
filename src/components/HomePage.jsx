import React, { useState } from 'react'
import './HomePage.css'
import Header from './Header';
import SignIn from './SignIn';
import MiddleContent from './MiddleContent';



const HomePage = () => {
  
    const[isOpen,setIsOpen]=useState(false);
  const signUpForm=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div className='homepage-content'>
   <div className='overlay'>
      
    <Header/>
    <div className='btn-container'>
     

      {!isOpen &&  <button className='btn' value={isOpen} onClick={signUpForm}>Sign In</button> }
     
      {isOpen && <SignIn/>}
    </div>
    </div>
    </div>
  )
}

export default HomePage
