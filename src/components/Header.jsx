import React from 'react';
import netflix_img from '../../src/images/netflix.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <img src={netflix_img} alt="logo" className='logo'/>
    </div>
  )
}

export default Header
