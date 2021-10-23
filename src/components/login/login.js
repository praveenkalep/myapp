import react  from "react"
import "./login.css";
import Footer from "../footer/footer";
import Logim from "../images/login.png"
function login () {
     return(
       <div>
         <img src={Logim} alt="" className="logim" />
         <section className="login-page">
        <div className="login-content">    
            <div className="login-form">
              <h2 className="login-title">Login</h2>
              <form className="login-register">            
                <div className="formgroup">
                  <label htmlFor="email">
                  <i class="zmdi zmdi-email material-icons-email"></i></label>
                    <input type="text" id="email" name="email" autoComplete="off" placeholder=" E-mail" required/>
                </div>
                <br/>
                <div className="formgroup">
                  <label htmlFor="password">
                  <i class="zmdi zmdi-lock material-icons-lock"></i></label>
                    <input type="text" id="password" name="password" autoComplete="off" placeholder=" Password" required/>
                </div>
                <br/>
                <div className="buton">
                  <input className="button" value="Login" type="button"/>
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
 export  default login; 