import React, { ChangeEvent, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { path } from "../App";
import { useDispatch } from "react-redux";
import { useUserLogin } from "../state/userLogin/userLoginSelector";
import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
} from "../state/userLogin/userLoginActions";
import * as api from "../common/api";
import Spin from "antd/lib/spin";
interface Props {}

const SigninScreen: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { loading, loginError } = useUserLogin();

  const handleEmailChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    [setPassword]
  );

  const handlePasswordChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(USER_SIGNIN_REQUEST());
    try {
      const response = await api.userLogin(email, password);
      dispatch(USER_SIGNIN_SUCCESS(response));
    } catch (e) {
      dispatch(USER_SIGNIN_FAIL(e));
    }
  };

  return (
    <div>
      {loading && <Spin />}
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
        {loginError && <p>{loginError}</p>}
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
