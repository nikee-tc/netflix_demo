import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChange = (event) => {
    setEmail(event.target.value);
  };
  const passwordChange = (event) => {
    setPassword(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setEmail(email);
    setPassword(password);
    console.log(setEmail);
    console.log(setPassword);
  };
  return (
    <div>
      <h1>Create a password to start your membership</h1>
      <h4>Just a few more steps and you're done! We hate paperwork, too.</h4>
      <form onSubmit={onSubmitHandler}>
        <div>
          <input
            className="input-content"
            type="email"
            placeholder="Email or phone number"
            name="email"
            value={email}
            onChange={emailChange}
          />
          <br />
        </div>
        <div>
          <br />
          <input
            className="input-content"
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={passwordChange}
          />
        </div>
        <br />
        <br />

        <button type="submit" className="submit-btn">
          Next
        </button>
      </form>
    </div>
  );
};

export default SignUp;
