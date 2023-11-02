import React from 'react';
import './App.css';
import FeatureContent from './components/Home/FeatureContent';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import ProfilePage from './components/Profile/ProfilePage'
import Movies from './components/Movies/Movies';



const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/profile', element: <ProfilePage /> },
 
  { path: '/movies', element: <Movies /> }
])

function App() {
  return (
    <div >
      <div className="background-img"></div>
      <RouterProvider router={router} />
      <FeatureContent />
   
    </div>
  );
}

export default App;
