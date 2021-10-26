import React from "react";
import "./booking.css"
import Footer from "../footer/footer"
 function Booking (){
     return(
       <div>
         <div className="booking-page">
             <div className="booking-content">    
            <div className="booking-form">
              <h2 className="booking-title">Booking</h2>
              <form className="booking-register" id="register-form">  
              <div className="booking-group">
                  <label htmlFor="add">
                  <i class="zmdi zmdi-cake material-icons-cake"></i></label>
                    <input type="text" id="name" name="name" autoComplete="off" placeholder="Function Name" required/>
                </div>
                <br/>
                <div className="booking-group">
                  <label htmlFor="add">
                  <i class="zmdi zmdi-pin-drop material-icons-pin-drop"></i></label>
                    <input type="date" id="date" name="date" autoComplete="off" placeholder=" Date" required/>
                </div>
                <br/>     
                <div className="booking-group">
                  <label htmlFor="add">
                  <i class="zmdi zmdi-time"></i></label>
                    <input type="time" id="time" name="time" autoComplete="off" placeholder="Time" required/>
                </div>
                <br/>     
                <div className="booking-group">
                  <label htmlFor="add">
                  <i class="zmdi zmdi-phone"></i></label>
                    <input type="pn" id="pn" name="pn" autoComplete="pn" placeholder="Phone Number" required/>
                </div>
                <br/>
                <div className="buton">
                  <button className="submit" value="Apply" type="button" className="button">Book</button>
                  </div>
                <br/>   

                <br/>               
              </form>
            </div>   
         </div>
        
         </div>
         <Footer />
         </div>
     )
 }
 export default Booking;