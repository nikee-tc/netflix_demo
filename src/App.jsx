import React from 'react';
import './App.css';
import FeatureContent from './components/Home/FeatureContent';

import HomePage from './components/Home/HomePage';
import ProfilePage from './components/Profile/ProfilePage'

import { BrowserRouter, Route , Routes, Navigate } from 'react-router-dom';
import SignIn from './components/Home/SignIn';
import Movies from './components/Movies/Movies'





function App() {
  return (
    <div >
      <div className="background-img"></div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path='/signin' element={<SignIn/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
      <Route path="/movies" element={<Movies/>}/>
    
      </Routes>
      </BrowserRouter>
     
      <FeatureContent />
   
    </div>
  );
}

export default App;
