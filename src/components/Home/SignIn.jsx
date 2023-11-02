import React, { useState } from "react";
import "./SignIn.css";
import FormContainer from "../UI/FormContainer";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [userNotFoundError, setUserNotFoundError] = useState(false);

  const onEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
    setUserNotFoundError(false);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
    setUserNotFoundError(false);
  };

  const validateForm = () => {
    let valid = true;

    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!isEmailValid(email)) {
      setEmailError("Invalid email ");
      valid = false;
    }

    if (!password) {
      setPasswordError("Psssword is required");
      valid = false;
    }
    // }else if(!isPasswordValid(password)){
    //   setPasswordError("Entered wrong password")
    // }
    return valid;
  };
  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (validateForm()) {
      const user = { email, password };
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      const foundUser = existingUsers.find(
        (u) => u.email === user.email && u.password === user.password
      );
      if (foundUser) {
        alert("login successfull");
        window.location.href = "/movies";
      } else {
        setUserNotFoundError(true);
      }
    }
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
          {emailError && <p className="error-message">{emailError}</p>}
          {userNotFoundError && (
            <p className="error-message">
              User not found. Please check your credentials
            </p>
          )}
          <br />
        </div>
        <div className="content-color">
          <br />
          <input
            className="input-content"
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={onPasswordChange}
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>
        <br />
        <br />

        <button type="submit" onClick={onSubmitHandler} className="submit-btn">
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
