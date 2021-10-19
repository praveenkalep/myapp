import React  from "react"
import "./application.css";
 function application (){
     return(
        <section className="application-page">
        <div className="application-content">    
            <div className="application-form">
              <h2 className="application-title">Application</h2>
              <form className="application-register" id="register-form">
                <div className="form-group">
                  <label htmlFor="fname">
                  <i class="zmdi zmdi-account material-icons-name"></i></label>
                    <input type="text" id="name" name="name" autoComplete="off" placeholder=" User Name"/>
                </div>
                <br/>
                               
                <div className="form-group">
                  <label htmlFor="phoneno">
                  <i class="zmdi zmdi-phone-in-talk material-icons-phone-in-talk"></i></label>
                    <input type="text" id="phoneno" name="phoneno" autoComplete="off" placeholder=" Phone Number"/>
                </div>
                <br/>
                <div className="form-group">
                  <label htmlFor="email">
                  <i class="zmdi zmdi-email material-icons-email"></i></label>
                    <input type="text" id="email" name="email" autoComplete="off" placeholder=" E-mail"/>
                </div>
                <br/>
                <div className="form-group">
                  <label htmlFor="password">
                  <i class="zmdi zmdi-lock material-icons-lock"></i></label>
                    <input type="text" id="password" name="password" autoComplete="off" placeholder=" Password"/>
                </div>
                <br/>
                <div className="form-group">
                  <label htmlFor="cpassword">
                  <i class="zmdi zmdi-lock material-icons-lock"></i></label>
                    <input type="text" id="cpassword" name="cpassword" autoComplete="off" placeholder=" Confirm Password"/>
                </div> 
                <br/>     

                <div className="buton">
                  <input className="button" value="Register" type="button"/>
                  </div>    
              </form>
            </div>     
            </div>
    </section>   
     )
 }
 export  default application;