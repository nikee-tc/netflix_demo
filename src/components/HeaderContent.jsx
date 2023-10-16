import React from 'react'
import './HeaderContent.css'
import netflix_logo from '../images/netflix.png';

const HeaderContent = () => {
  return (
    <>
    <div className='logo-header'>
      <img src={netflix_logo} alt="logo" className='logo'/>
    </div>
    <div className='btn-container'>
      <button className='btn'>Sign In</button>
    </div>
    </>
  )
}

export default HeaderContent
