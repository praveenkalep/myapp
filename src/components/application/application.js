import React  from "react"
import "./application.css";
 function application (){
     return(
        <section className="application-page">
        <div className="application-content">    
            <div className="application-form">
              <h2 className="application-title">Application</h2>
              <form className="application-register" id="register-form">
                <div className="application-group">
                  <label htmlFor="name">
                  <i class="zmdi zmdi-account material-icons-name"></i></label>
                    <input type="text" id="name" name="name" autoComplete="off" placeholder=" User Name"/>
                </div>
                <br/>
                <div className="application-group" >
                  <label htmlFor="dob">
                  <i class="zmdi zmdi-calendar-check material-icons-calender-check"></i></label>
                    <input type="date" id="dob" name="dob" autoComplete="off" placeholder="Date Of Birth"/>
                </div> 
                <br/>         
                <div className="application-group" >
                  <label htmlFor="phoneno">
                  <i class="zmdi zmdi-phone-in-talk material-icons-phone-in-talk"></i></label>
                    <input type="text" id="phoneno" name="phoneno" autoComplete="off" placeholder=" Phone Number"/>
                </div>
                <br/>
                <div className="application-group">
                  <label htmlFor="email">
                  <i class="zmdi zmdi-email material-icons-email"></i></label>
                    <input type="email" id="email" name="email" autoComplete="off" placeholder=" E-mail"/>
                </div>
                <br/>
                <div className="application-group">
                  <label htmlFor="cv" className="bd">
                  <i class="zmdi zmdi-attachment material-icons-attachment"></i>  Attached your certificate</label>
                    <input type="file" id="ceno" name="ceno" autoComplete="off" />
                </div>                         
               <br/>     
               <div className="application-group">
                  <label htmlFor="cv" className="bd">
                  <i class="zmdi zmdi-attachment material-icons-attachment"></i>  Attached your Biodata </label>
                    <input type="file" id="cv" name="cv" autoComplete="off"/>
                </div>
                <br/>
                <div className="buton">
                  <input className="button" value="Apply" type="button"/>
                  </div>    
              </form>
            </div>     
            </div>
    </section>   
     )
 }
 export  default application;