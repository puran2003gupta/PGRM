import React from 'react'
import signup from "../images/signup.png";
import { NavLink } from 'react-router-dom';

const SignUp = () => {
  return (
    <>
    <section className="signup">
      <div className="container mt-5">
        <div className="signup-content">
        <div className='signup-image'>
              <figure>
              <img src={signup}  class="code-img" alt="Sign up"/>
              </figure>
              
             </div>


          <div className="signup-form">
            <h2 className="form-title">Sign up</h2>
            <form className="register-form" id ="register-form">




              <div className="form-group">
                <label htmlFor="name">
                <i class="zmdi zmdi-account material-icons-name"></i>
                </label>
                <input type="text"  name = "name" id ="name" autoComplete='off' placeholder=' Your Name'/>
              </div>




              <div className="form-group">
                <label htmlFor="Email">
                <i class="zmdi zmdi-email material-icons-name"></i>
                </label>
                <input type="text"  name = "name" id ="Email" autoComplete='off' placeholder=' Your Email'/>
              </div>




              <div className="form-group">
                <label htmlFor="Phone No">
                <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                </label>
                <input type="text"  name = "Phone No" id ="Phone No" autoComplete='off' placeholder=' Your Phone No'/>
              </div>




              <div className="form-group">
                <label htmlFor="Work">
                <i class="zmdi zmdi-slideshow material-icons-name"></i>
                </label>
                <input type="text"  name = "Work" id ="Work" autoComplete='off' placeholder=' Your Profession'/>
              </div>




              <div className="form-group">
                <label htmlFor="Password">
                <i class="zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input type="text"  name = "Password" id ="Password" autoComplete='off' placeholder=' Your Password'/>
              </div>




              <div className="form-group">
                <label htmlFor="CPassword">
                <i class="zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input type="text"  name = "CPassword" id ="CPassword" autoComplete='off' placeholder=' Confirm Your Password'/>
              </div>



              <div className='form-group form-button'>
                <input type="submit" name ="signup" id ="signup" className='form-submit' value ="Register" />
              </div>
              <div className='form-group'>
                <NavLink to="/signup" className="signup-image-link">Create an account</NavLink>
              </div>
              </form>
              
              </div>
           
              
          </div>
          
      </div>
    </section>
    </>
  )
}

export default SignUp