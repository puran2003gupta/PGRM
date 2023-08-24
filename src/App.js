import React, { Component } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { Routes, Route} from "react-router-dom";

import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Citi_Dashboard from "./components/Citi_Dashboard";


// import Dashboard from "./components/Dashboard";
// import Citizen from "./components/Citizen";
// import GRO from "./components/GRO";
// import RO from "./components/RO";

class App extends Component {
  render() {
    return (
      <>
      
      <Navbar/>
      
         <Routes>
         <Route exact path="/" element={<Home/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<SignUp/>} />
          <Route exact path="/CDash" element={<Citi_Dashboard/>} />
          {/* <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/citizen" element={<Citizen/>} />
          <Route exact path="/gro" element={<GRO/>} />
          <Route exact path="/ro" element={<RO/>} /> */}
          </Routes>
      
      
      </>
    );
  }
}

export default App;