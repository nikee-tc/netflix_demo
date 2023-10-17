import React from 'react';
import netflix_img from '../../src/images/netflix.png'

const Header = () => {
  return (
    <div>
      <img src={netflix_img} alt="logo" className='logo'/>
    </div>
  )
}

export default Header
