import React from "react";
import "./booking.css"
 function Booking (){
     return(
         <div className="booking-page">
             <div className="application-content">    
            <div className="application-form">
              <h2 className="application-title">Application</h2>
              <form className="application-register" id="register-form">  
                  <label>Function Type</label>
                    <input type="text" id="name" name="name" autoComplete="off" placeholder="Function Type" required/>
                <br/>
                  <label htmlFor="dob">Date</label>
                    <input type="date" id="dob" name="dob" autoComplete="off" placeholder="Date" required/>              
                <br/>         
                  <label htmlFor="phoneno">Time</label>
                    <input type="time" id="time" name="time" autoComplete="off" placeholder="Time" required/>
                <br/>
                <div className="application-group">
                  <label htmlFor="email">
                  <i class="zmdi zmdi-email material-icons-email"></i></label>
                    <input type="email" id="email" name="email" autoComplete="off" placeholder=" E-mail" required/>
                </div>
                <br/>
                <div className="application-group">
                  <label htmlFor="add">
                  <i class="zmdi zmdi-pin-drop material-icons-pin-drop"></i></label>
                    <input type="text" id="email" name="add" autoComplete="off" placeholder=" Address" required/>
                </div>
                <br/>
                <div className="application-group">
                  <label htmlFor="cv" className="bd">
                  <i class="zmdi zmdi-attachment material-icons-attachment"></i>  Attached your certificate</label>
                    <input type="file" id="ceno" name="ceno" autoComplete="off" required/>
                </div>                         
               <br/>     
               <div className="application-group">
                  <label htmlFor="cv" className="bd">
                  <i class="zmdi zmdi-attachment material-icons-attachment"></i>  Attached your Biodata </label>
                    <input type="file" id="cv" name="cv" autoComplete="off" required/>
                </div>
                <br/>               
              </form>
            </div>   
         </div>
         </div>
     )
 }
 export default Booking;