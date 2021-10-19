import React from "react";
import './NavBar.css';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";
import parlour from "../parlour/parlour";
import tips from "../tips/tips";
import about from "../about/about"
import application from "../application/application"
import login from "../login/login"
import signup from"../signup/signup"
import HomePage from "../homepage/homepage";

function NavBar (){
    return (
        <div className="menu">
         
    <nav className="navbar">
      <ul className="signup"> 
      <li>
        <div className="navbar-content">
          <Link to="/login">Login</Link>
        </div>
      </li>
      <li>
        <div className="navbar-content">
          <Link to="/signup">Signup</Link>
        </div>
      </li> 
      <li>
        <div className="navbar-content">
          <div className="search-bar">
            <label htmlFor="search">
            <i class="zmdi zmdi-search material-icons-search"></i>
            </label>
            <input type="text" className="search-text" placeholder="Search.."/>
          </div>
        </div>
      </li> 
      <li>
        <div className="navbar-content">
          <Link to="/">Home</Link>
        </div>
      </li>
      <li>
        <div className="navbar-content">
          
          <Link to="/parlour">Parlours</Link>
        </div>
      </li>
      <li>
        <div className="navbar-content">
          <Link to="/application">Application</Link>
        </div>
      </li>
      <li>
        <div className="navbar-content">
          <Link to="/tips">Tips</Link>
        </div>
      </li>
      <li>
        <div className="navbar-content">
          <Link to="/about">About</Link>
        </div>
      </li>
      </ul>
    </nav> 
    
        </div>
    );
};
export default NavBar;
