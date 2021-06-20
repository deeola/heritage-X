import React, {useContext, Fragment} from "react";
import { Link } from "react-router-dom";
import useSign from './useSign'
import ValidateSign from "./ValidateSign";
import heritageContext from "../context/Heritage/heritageContext";

const SignUp = () =>{
  const HeritageContext = useContext(heritageContext);
  const {isSubmitted, Submitform} = HeritageContext;

    const {values, handleChange,onSubmit,error} = useSign(Submitform,ValidateSign);
    const {username, email, password2,password} = values;
    return (
      <div className='formDesigns'>
        <form className='form-inputss'  onSubmit={onSubmit}>
          <div className='signupHeader'>
            <div>
              <h1>Sign Up</h1>
              <p>Be a part of our Community </p>
            </div>
            <i className="fas fa-user-plus"></i>
          </div>
          <div>
              <label htmlFor='username'>Username</label>
              <input onChange={handleChange} placeholder='username' name='username' type='text' id='username' value={username}></input>
              {error.username && <p>{error.username}</p>}
          </div>

          <div>
              <label htmlFor='email'>Email</label>
              <input onChange={handleChange}  placeholder='email' name='email' type='email' id='email' value={email}></input>
              {error.email && <p>{error.email}</p>}
          </div>
          <div>
              <label htmlFor='password'>Password</label>
              <input onChange={handleChange}  placeholder='password' name='password' type='password' id='password' value={password}></input>
              {error.password && <p>{error.password}</p>}
          </div>
          <div>
              <label htmlFor='password2'>Confirm Password</label>
              <input onChange={handleChange}  placeholder='confirm password' name='password2' type='password' id='password2' value={password2}></input>
              {error.password2 && <p>{error.password2}</p>}
          </div>
          <button type='submit'>Sign Up</button>
        </form>

        <p className='signinLink'>
          Already have an account? <Link className='link' to="/Login">Sign In</Link>
        </p>
      </div>
    );
}

export default SignUp;