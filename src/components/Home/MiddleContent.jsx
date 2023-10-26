import React, { useState } from "react";
import "./MiddleContent.css";

const MiddleContent = () => {
  const [email, setEmail] = useState("");

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
    console.log(setEmail);
  };

  return (
    <div className="text">
      <h1 className="dynamic-font">
        The Biggest Indian hits. Ready to Watch here from ₹149.
      </h1>
      <p className="para-text"> Join today. Cancel anytime.</p>

      <p className="para">
        {" "}
        Ready to Watch? Enter your email to create or restart your membership.
      </p>
      <div className="input-container">
        <input
          type="email"
          value={email}
          onChange={emailChangeHandler}
          placeholder="Email address"
        ></input>
        <button className="btn">Get Started</button>
      </div>
    </div>
  );
};

export default MiddleContent;
