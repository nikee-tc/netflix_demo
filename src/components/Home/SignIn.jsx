import React, {  useState  } from "react";
import "./SignIn.css";
import FormContainer from "../UI/FormContainer";

const SignIn = () => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = () => {
   const user = {email,password};
   const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
   const foundUser = existingUsers.find((u) => u.email === user.email && u.password === user.password);
   if(foundUser){
    alert('login successfull')
   }else{
    alert('invalid username & password');
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
