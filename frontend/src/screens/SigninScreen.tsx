import React, { ChangeEvent, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { path } from "../App";

interface Props {}

const SigninScreen: React.FC<Props> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const submitHandler = () => {};
  const handleEmailChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );

  const handlePasswordChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign in</h1>
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            value={email}
            id="email"
            placeholder="E-mail"
            required
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            id="password"
            placeholder="Password"
            required
            onChange={handlePasswordChange}
          />
        </div>
        <button className="primary" type="submit">
          Submit
        </button>
        <div>
          New customer? <Link to={path.register}>Register</Link>
        </div>
      </form>
    </div>
  );
};

export default SigninScreen;
