import React, { useState } from "react";
import "./HomePage.css";
import Header from "../Header";
import SignIn from "../Home/SignIn";
import MiddleContent from "../Home/MiddleContent";
import FeatureContent from "./FeatureContent";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const signUpForm = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = () => {
    alert("Searching..."); 
  };

  return (
    <div className="overlay">
      <Header />
      <div className="search">
        <input type="text" placeholder="You can search here!" />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="btn-container">
        <select className="dropdown">
          <option>English</option>
          <option>Hindi</option>
        </select>

        {!isOpen && (
          <button className="btn" onClick={signUpForm}>
            Sign In
          </button>
        )}
      </div>
      {isOpen ? <SignIn /> : <MiddleContent />}
      < FeatureContent/>
    </div>
  );
};

export default HomePage;
