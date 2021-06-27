import React, {useContext} from "react";
import { Link } from "react-router-dom";
import useSign from './useSign'
import ValidateSign from "./ValidateSign";
import heritageContext from "../context/Heritage/heritageContext";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const SignUp = () =>{
  const HeritageContext = useContext(heritageContext);
  const {SubmitSignUp} = HeritageContext;

  // const dee = () => {
  //   return(
  //     <div>
  //       signed in
  //     </div>
  //   )
  // }

    const {values, handleChange,onSubmit,error} = useSign(SubmitSignUp,ValidateSign);
    const {username, email, password2,password} = values;
    return (
      <div className='form-container'>
        <Navbar />
        <div className='formDesigns'>
        <form className='form-inputss'  onSubmit={onSubmit} noValidate>
          <div className='LoginHeader'>
            <div>
              <h3>Sign Up</h3>
              <p>Be a part of our community.</p>
            </div>
            <i className="fas fa-user-plus"></i>
          </div>
          
          <div className='form-control'>
              <label htmlFor='username'>Username</label>
              <input onChange={handleChange} placeholder='username' name='username' type='text' id='username' value={username}></input>
              {error.username && <p className='error'>{error.username}</p>}
          </div>

          <div className='form-control'>
              <label htmlFor='email'>Email</label>
              <input onChange={handleChange}  placeholder='email' name='email' type='email' id='email' value={email}></input>
              {error.email && <p className='error'>{error.email}</p>}
          </div>
          <div className='form-control'>
              <label htmlFor='password'>Password</label>
              <input onChange={handleChange}  placeholder='password' name='password' type='password' id='password' value={password}></input>
              {error.password && <p className='error'>{error.password}</p>}
          </div>
          <div className='form-control'>
              <label htmlFor='password2'>Confirm Password</label>
              <input onChange={handleChange}  placeholder='confirm password' name='password2' type='password' id='password2' value={password2}></input>
              {error.password2 && <p className='error'>{error.password2}</p>}
          </div>
          <button type='submit'>Register</button>
        </form>

        <p className='signinLink'>
          Already have an account? <Link className='link' to="/Login">Sign In</Link>
        </p>
      </div>
      <Footer />
        
      </div>
      
    );
}

export default SignUp;