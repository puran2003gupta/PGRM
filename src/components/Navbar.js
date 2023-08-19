import React from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import logo from "../images/pgrm.png";
const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
      <img src={logo} alt="logo" height="25px" width="100px"/>
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/login">LogIn</NavLink>
        </li> */}
          <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login For
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/login">Citizen</NavLink></li>
            <li><NavLink className="dropdown-item" to="/login"> GRO</NavLink></li>
            <li><NavLink className="dropdown-item" to="/login"> RO</NavLink></li>
          </ul>
        </li>
        <li className="nav-item">
              <NavLink className="nav-link active signup-button" aria-current="page" to="/signup">Sign up</NavLink>
        </li>
      
       
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar