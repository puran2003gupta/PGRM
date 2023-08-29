import React, { useEffect, useState } from 'react'
import signup from "../images/signup.png";
import { NavLink } from "react-router-dom";
import { signUp } from '../Services/user-service';

const SignUp = () => {
  const [data, setData]=useState({
    user_id:'',
    user_name:'',
    user_email :'',
    user_mobile:'',
    user_profession:'',
    user_pass:'',
    user_Cpass:''
  })
  const [error, setError]= useState({
    errors:{},
    isError:false
  })

  // useEffect(()=>{
  //   console.log(data);
  // }, [data])

  //handle change
  const handleChange=(event,property)=>{
    //dynamic value setting
    setData({...data,[property]:event.target.value})
  }

  //submit the form
  const submitForm=(event)=>{
    event.preventDefault()
    console.log(data);

    //call server api for sending data
    signUp(data).then((resp)=>{
      console.log(resp);
      console.log("success log");

    }).catch((error)=>{
      console.log(error);
      console.log("Error log");
    })

  }

  
  return (
    <>
    <section className="signup">
      <div className="container mt-5">
        <div className="signup-content">

        <div className='signin-image'>
            <figure>
              <img src={signup} alt="Sign up" className="code-img" />
            </figure>
          </div>

          <div className="signup-form">
           <h2 className="form-title">Sign Up</h2>
           <form className="register-form" id="register-form" onSubmit={submitForm}>

           <div className="form-group">
                <label htmlFor="name">
                <i class="zmdi zmdi-account material-icons-name"></i>
                </label>
                <input type="text"  name = "name" id ="name" autoComplete='off' placeholder=' Your Name' 
                onChange={(e)=>handleChange(e,'user_name')} 
                value ={data.user_name}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Email">
                <i class="zmdi zmdi-email material-icons-name"></i>
                </label>
                <input type="text"  name = "name" id ="Email" autoComplete='off' placeholder=' Your Email'
                onChange={(e)=>handleChange(e,'user_email')}
                value ={data.user_email}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Phone No">
                <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                </label>
                <input type="text"  name = "Phone No" id ="Phone No" autoComplete='off' placeholder=' Your Phone No'
                onChange={(e)=>handleChange(e,'user_mobile')}
                value ={data.user_mobile}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Work">
                <i class="zmdi zmdi-slideshow material-icons-name"></i>
                </label>
                <input type="text"  name = "Work" id ="Work" autoComplete='off' placeholder=' Your Profession'
                onChange={(e)=>handleChange(e,'user_profession')}
                value ={data.user_profession}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Password">
                <i class="zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input type="text"  name = "Password" id ="Password" autoComplete='off' placeholder=' Your Password'
                onChange={(e)=>handleChange(e,'user_pass')}
                value ={data.user_pass}
                />
              </div>

              <div className="form-group">
                <label htmlFor="CPassword">
                <i class="zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input type="text"  name = "CPassword" id ="CPassword" autoComplete='off' placeholder=' Confirm Your Password'
                onChange={(e)=>handleChange(e,'user_Cpass')}
                value ={data.user_Cpass}
                />
              </div>

              <div className='form-group form-button'>
                <input type="submit" name="signup" id="signup" className='form-submit' value="Sign Up" />
              </div>

              <div className='form-group'>
                <NavLink to="/login" className="sigin-image-link">Already have an account</NavLink>
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