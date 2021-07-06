import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useForm from "./useForm";
import Validate from "./Validate";
import heritageContext from "../context/Heritage/heritageContext";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
const Login = () => {
  const HeritageContext = useContext(heritageContext);
  const { Submitform } = HeritageContext;

  const { signValues, handleChangeSign, onSubmitSignin, error } = useForm(
    Submitform,
    Validate
  );
  const { mainusername, mainpassword } = signValues;
  return (
    <div className="form-container">
      <Navbar />
      <div className="formDesigns">
        <div className="LoginHeader">
          <div>
            <h3>Login</h3>
            <p>See your saved and bucket lists.</p>
          </div>
          <i className="fas fa-sign-in-alt"></i>
        </div>
        <form className="form-inputss" onSubmit={onSubmitSignin} noValidate>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              onChange={handleChangeSign}
              type="text"
              placeholder="username"
              id="username"
              name="mainusername"
              value={mainusername}
            ></input>
            {error.mainusername && (
              <p className="error">{error.mainusername}</p>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChangeSign}
              type="password"
              placeholder="password"
              id="password"
              name="mainpassword"
              value={mainpassword}
            ></input>
            {error.mainpassword && (
              <p className="error">{error.mainpassword}</p>
            )}
          </div>
          <button type="submit">Log in</button>
        </form>
        <p className="signinLink">
          Don't have an account?{" "}
          <Link className="link" to="/SignUp">
            {" "}
            Sign Up
          </Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
