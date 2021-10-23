import React  from "react"
import "./application.css";
import Footer from "../footer/footer"
 function application (){
     return(
       <div>
        <section className="application-page">
        <div className="application-content">    
            <div className="application-form">
              <h2 className="application-title">Application</h2>
              <form className="application-register" id="register-form">
                <div className="application-group">
                  <label htmlFor="name">
                  <i class="zmdi zmdi-account material-icons-name"></i></label>
                    <input type="text" id="name" name="name" autoComplete="off" placeholder=" Full Name" required/>
                </div>
                <br/>
                <div className="application-group" >
                  <label htmlFor="dob">
                  <i class="zmdi zmdi-calendar-check material-icons-calender-check"></i></label>
                    <input type="date" id="dob" name="dob" autoComplete="off" placeholder="Date Of Birth" required/>
                </div> 
                <br/>         
                <div className="application-group" >
                  <label htmlFor="phoneno">
                  <i class="zmdi zmdi-phone-in-talk material-icons-phone-in-talk"></i></label>
                    <input type="text" id="phoneno" name="phoneno" autoComplete="off" placeholder=" Phone Number" required/>
                </div>
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
            <div className="application-forme">
              <h2 className="application-title">Parlour Details</h2>
              <form className="application-register" >
              <div className="application-group">
                  <label htmlFor="pname">
                  <i class="zmdi zmdi-account material-icons-name"></i></label>
                    <input type="text" id="pname" name="pname" autoComplete="off" placeholder="Parlour Name" required/>
                </div>
                <br/>
                <div className="application-group">
                  <label htmlFor="email">
                  <i class="zmdi zmdi-email material-icons-email"></i></label>
                    <input type="email" id="pemail" name="pemail" autoComplete="off" placeholder=" E-mail" required/>
                </div>
                <br/>
                <div className="application-group">
                  <label htmlFor="pno">
                  <i class="zmdi zmdi-phone-in-talk material-icons-phone-in-talk"></i></label>
                    <input type="text" id="pno" name="pno" autoComplete="off" placeholder=" Phone Number" required/>
                </div>
                <br/>
                <div className="application-group">
                  <label htmlFor="padd">
                  <i class="zmdi zmdi-pin-drop material-icons-pin-drop"></i></label>
                    <input type="text" id="padd" name="padd" autoComplete="off" placeholder="Address" required/>
                </div>
                <br/>
                <div className="application-group">
                  <label htmlFor="noc">
                  <i class="zmdi zmdi-accounts-outline material-icons-accounts-outline"></i></label>
                    <input type="text" id="noc" name="noc" autoComplete="off" placeholder="Number of Regular Customers" required/>
                </div>
                <br/>
                <div className="application-group">
                  <label htmlFor="now">
                  <i class="zmdi zmdi-accounts-outline material-icons-accounts-outline"></i></label>
                    <input type="text" id="now" name="now" autoComplete="off" placeholder="Number of Employees" required/>
                </div>
                <br/>
                <div className="application-group">
                  <label htmlFor="re" className="bd">
                  <i class="zmdi zmdi-attachment material-icons-attachment"></i>  Attached your Parlour License </label>
                    <input type="file" id="re" name="re" autoComplete="off" required/>
                </div>
                <br/>
                <div className="buton">
                  <input className="button" value="Apply" type="button"/>
                  </div>  
                <br/>
              </form>
              </div>  
            </div>
           
    </section>   
     <center>
     <Footer/>
   </center>
   </div>
     )
 }
 export  default application;