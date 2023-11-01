import React, { useState } from "react";
import "./MiddleContent.css";
import Registration from "./Registration";

const MiddleContent = () => {
  const [email, setEmail] = useState("");

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
    console.log(setEmail);
  };
  // const handleGetStarted = (event)=>{
  //   event.preventDefault();
  //   setEmail(email);
  //   setEmail('');
  // }
  return (
    <div className="text">
      <h1 className="dynamic-font">
        The Biggest Indian hits. Ready to Watch here from ₹149.
      </h1>
      <h4>
        <p className="para-text"> Join today. Cancel anytime.</p>
        <p className="para-text">
          Ready to Watch? Enter your email to create or restart your membership.
        </p>
      </h4>
      <Registration/>
    </div>
  );
};

export default MiddleContent;
