import React, { useState } from 'react'
import './HomePage.css'
import Header from '../Header';
import SignIn from '../Home/SignIn';
import MiddleContent from '../Home/MiddleContent';
import FeatureContent from './FeatureContent';



const HomePage = () => {
  
    const[isOpen,setIsOpen]=useState(false);
  
  const signUpForm=()=>{
    setIsOpen(!isOpen);

  }
  
  return (
    <div className='homepage-content'>
   <div className='overlay'>
      
    <Header/>
    <div className='btn-container'>
    
     

    {!isOpen && <button className='btn'  onClick={signUpForm}>Sign In</button> 
      } 
   
      {isOpen && <SignIn/>}
      
    </div>
    <FeatureContent/>
    </div>
    </div>
  )
}

export default HomePage
