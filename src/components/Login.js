import React from 'react';
import loginpic from "../images/login.png";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <section className="signin">
      <div className="container mt-5">
        <div className="signin-content">
          <div className='signin-image'>
            <figure>
              <img src={loginpic} alt="login-in" className="loginimg" />
            </figure>
          </div>

          <div className="signin-form">
            <h2 className="form-title">Sign In</h2>
            <form className="register-form" id="register-form">
              <div className="form-group">
                <label htmlFor="Email">
                  <i className="zmdi zmdi-email material-icons-name"></i>
                </label>
                <input type="text" name="name" id="Email" autoComplete='off' placeholder=' Your Email' />
              </div>

              <div className="form-group">
                <label htmlFor="Password">
                  <i className="zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input type="password" name="Password" id="Password" autoComplete='off' placeholder=' Your Password' />
              </div>

              <div className='form-group form-button'>
                <input type="submit" name="signin" id="signin" className='form-submit' value="Log In" />
              </div>

              <div className='form-group'>
                <NavLink to="/signup" className="signup-image-link">Create an account</NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login;
