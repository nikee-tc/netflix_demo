import React from 'react'
import './MiddleContent.css'

const MiddleContent = () => {
  return (
    <div className="content">
      <h1 className='dynamic-font'>The Biggest Indian hits. Ready to Watch here from  ₹149.</h1>
   <p>Join today. Cancel anytime.</p>
   <p>Ready to Watch? Enter your email to create or restart your membership.</p>
   <input type='email' className='email-container' placeholder='Email address'></input>
   <br />
   <button className='btn'>Get Started</button>
    </div>
  )
}

export default MiddleContent
