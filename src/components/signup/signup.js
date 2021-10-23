import React from "react";
import "./signup.css"
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";
import intro from "../images/intro.png"
import Footer from "../footer/footer";


function signup (){
  return (
    <div>
    <section className="signup-page">
      <img src={intro} alt="" />
        <div className="signup-content">       
            <div className="signup-form">     
              <h2 className="signup-title">Sign up</h2>           
              <form className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="fname">
                  <i class="zmdi zmdi-account material-icons-name"></i></label>
                    <input type="text" id="name" name="name" autoComplete="off" placeholder=" User Name" required/>
                </div>
                <br/>
                               
                <div className="form-group">
                  <label htmlFor="phoneno">
                  <i class="zmdi zmdi-phone-in-talk material-icons-phone-in-talk"></i></label>
                    <input type="text" id="phoneno" name="phoneno" autoComplete="off" placeholder=" Phone Number" required/>
                </div>
                <br/>
                <div className="form-group">
                  <label htmlFor="email">
                  <i class="zmdi zmdi-email material-icons-email"></i></label>
                    <input type="text" id="email" name="email" autoComplete="off" placeholder=" E-mail" required/>
                </div>
                <br/>
                <div className="form-group">
                  <label htmlFor="password">
                  <i class="zmdi zmdi-lock material-icons-lock"></i></label>
                    <input type="text" id="password" name="password" autoComplete="off" placeholder=" Password" required/>
                </div>
                <br/>
                <div className="form-group">
                  <label htmlFor="cpassword">
                  <i class="zmdi zmdi-lock material-icons-lock"></i></label>
                    <input type="text" id="cpassword" name="cpassword" autoComplete="off" placeholder=" Confirm Password" required/>
                </div> 
                <br/>     
                <div className="buton">
                  <input className="button" value="Signup" type="button"/>
                  </div>
              </form>
            </div>     
            </div>              
    </section>  
    <center>
    <Footer/>
    </center> 
    </div>
    
  );
};

export default signup; 
