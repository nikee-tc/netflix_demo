import React, { useState } from 'react';


const UserProfile = ({ user }) => {
  return (
    <div className='user-profile'>
      <h1>Welcome, {user.name}</h1>

      <button>Sign Out</button>
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



