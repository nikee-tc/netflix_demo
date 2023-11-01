import React, { useState } from "react";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const onClickHandler = () => {
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
      </div>
      <input
        className="input-container"
        type="password"
        name="password"
        value={password}
        placeholder="Password"
        onChange={onPasswordChange}
      />
      <button className="btn-start" onClick={onClickHandler}>
        Get Started
      </button>
    </div>
  );
};

export default Registration;
