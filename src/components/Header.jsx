import React from 'react';
import netflix_logo from '../images/netflix.png'

const Header = () => {
  return (
    <div>
      <img src={netflix_logo} alt="logo" className='logo'/>
    </div>
  )
}

export default Header
