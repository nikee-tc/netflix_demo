import React from "react";
import "./App.css";
import FeatureContent from "./components/Home/FeatureContent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import ProfilePage from "./components/Profile/ProfilePage";
import Movies from "./components/Movies/Movies";
import SignUp from "./components/SignUp/SignUp";
import MovieDetails from "./components/Movies/MovieDetails";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/", element: <ProfilePage /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/", element: <SignUp /> },
  { path: "/movies", element: <Movies /> },
  { path: "/", element: <Movies /> },
  { path: "/movies/:imdbID", element: <MovieDetails /> },
]);

function App() {
  return (
    <div>
      <div className="background-img"></div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
