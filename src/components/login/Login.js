import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import useForm from "./useForm";
import Validate from './Validate';
const Login = ({Submitform}) => {
  const {signValues, handleChangeSign, onSubmitSignin,error } = useForm(Submitform, Validate);
  const { mainusername, mainpassword } = signValues;
  return (
    <div className='formDesign'>
      <div className='LoginHeader'>
        <div>
          <h1>Login</h1>
          <p>See your saved list and bucket list</p>
        </div>
        <i class="fas fa-sign-in-alt"></i>
      </div>
      <form className='form-inputs' onSubmit={onSubmitSignin}>
        <div>
          <label htmlFor="username">
            Username
            <input
              onChange={handleChangeSign}
              type="text"
              placeholder="username"
              id="username"
              name="mainusername"
              value={mainusername}
            ></input>
            {error.mainusername && <p>{error.mainusername}</p>}
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password
            <input
              onChange={handleChangeSign}
              type="password"
              placeholder="password"
              id="password"
              name="mainpassword"
              value={mainpassword}
              
            ></input>
            {error.mainpassword && <p>{error.mainpassword}</p>}
          </label>
        </div>
        <button type="submit">Log in</button>
      </form>
      <p className='signUpLink'>
        Don't have an account? <Link className='link' to="/SignUp">Sign Up!</Link>
      </p>
    </div>
  );
};

export default Login;
