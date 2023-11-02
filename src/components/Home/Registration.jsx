import React, { useState } from "react";
import './Registration.css'

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const isEmailValid = (email)=>{
    const emailPattern =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };
  const isPasswordValid = (password) => {
    return password.length >= 6;
  }
  const onClickHandler = () => {
    setEmailError("");
    setPasswordError("");

    if(!isEmailValid(email)){
      setEmailError("Invalid email address");
      return;
    }
    if(!isPasswordValid(password)){
      setPasswordError("Password must be at least 6 characters long");
      return;
    }

    const user = { email, password };
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (existingUsers.find((u) => u.email === email)) {
      alert("Username already exists. Please choose a different one.");
      return;
    }

    existingUsers.push(user);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    alert("Registration successful! You can now log in.");

    setEmail("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
  };
  return (
    <div>
      <div className="input-container">
        <input
          type="email"
          value={email}
          onChange={emailChangeHandler}
          placeholder="Email address"
        ></input>
       
        {emailError && <p className="error-message">{emailError}</p>}
       
      </div>
      <div  className="input-container">
      <input
       
        type="password"
        name="password"
        value={password}
        placeholder="Password"
        onChange={onPasswordChange}
      />
      {passwordError && <p className="error-message">{passwordError}</p>}
      </div>
      <button className="btn-start" onClick={onClickHandler}>
        Get Started
      </button>
      
    </div>
  );
};

export default Registration;
