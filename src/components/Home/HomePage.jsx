import React, { useState } from "react";
import "./HomePage.css";
import Header from "../Header";
import SignIn from "../Home/SignIn";
import MiddleContent from "../Home/MiddleContent";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const signUpForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="overlay">
      <Header />
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
    </div>
  );
};

export default HomePage;
