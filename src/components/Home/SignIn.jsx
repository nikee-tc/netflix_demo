import React, { useEffect, useState } from "react";
import "./SignIn.css";
import FormContainer from "../UI/FormContainer";

import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
  function navigateHandler() {
    navigate("/profile");
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userData = localStorage.getItem("users");

    if (userData) {
      setUsers(JSON.parse(userData));
    }
  }, []);

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newUser = { email, password };
    setUsers([...users, newUser]);
    localStorage.setItem("users", JSON.stringify([...users, newUser]));

    setEmail("");
    setPassword("");
  };

  return (
    <FormContainer>
      <h2 className="content-color">Sign In</h2>

      <form onSubmit={onSubmitHandler}>
        <div className="content-color">
          <input
            className="input-content"
            type="email"
            placeholder="Email or phone number"
            name="email"
            value={email}
            onChange={onEmailChange}
          />
          <br />
        </div>
        <div className="content-color">
          <br />{" "}
          <input
            className="input-content"
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={onPasswordChange}
          />
        </div>
        <br />
        <br />

        <button type="submit" onClick={navigateHandler} className="submit-btn">
          Sign In
        </button>
      </form>

      <br />
      <br />

      <span className="signup-text">New to Netflix?</span>
      <a className="signup-link"> Sign up now.</a>
      <br />
      <br />
      <span className="para">
        {" "}
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
      </span>
      <a className="link"> Learn more.</a>
    </FormContainer>
  );
};

export default SignIn;
