import React, { useState } from 'react';
import netflix_avtar from '../../images/Netflix-avatar.png';
import netflix_kids from '../../images/netflix-kids.png';
import avtar2 from '../../images/avtar2.png';
import avtar3 from '../../images/avtar3.png';
import './ProfilePage.css';

const UserProfile = ({ user }) => {
  return (
    <div className='user-profile'>
      {/* <h1>Welcome, {user.name}</h1> */}
<h1>Who's watching? </h1>
<li>
  <ul>
    <img  src={netflix_avtar}  alt='avtar' className='avtar'/>
<img src={netflix_kids} alt='kids' className='avtar'/>
<img  src={avtar2}  alt='avtar' className='avtar'/>
<img  src={avtar3}  alt='avtar' className='avtar'/>
  </ul>
</li>
      <button className='avtar-btn'>+</button>
    </div>
  );
};

const ProfilePage = () => {

  const [user,setUser] = useState({
    name:'nikee',
   
  });
  return (
    <div className='profile-page'>
      <UserProfile user={user}/>
    </div>
  )
}

export default ProfilePage



