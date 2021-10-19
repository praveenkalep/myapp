import react  from "react"
import "./login.css";
function login () {
     return(
         <section className="login-page">
        <div className="login-content">    
            <div className="login-form">
              <h2 className="login-title">Login</h2>
              <form className="login-register">            
                <div className="formgroup">
                  <label htmlFor="email">
                  <i class="zmdi zmdi-email material-icons-email"></i></label>
                    <input type="text" id="email" name="email" autoComplete="off" placeholder=" E-mail"/>
                </div>
                <br/>
                <div className="formgroup">
                  <label htmlFor="password">
                  <i class="zmdi zmdi-lock material-icons-lock"></i></label>
                    <input type="text" id="password" name="password" autoComplete="off" placeholder=" Password"/>
                </div>
                <br/>
                <div className="buton">
                  <input className="button" value="Login" type="button"/>
                  </div>    
              </form>
            </div>     
            </div>
    </section>   
     );
 };
 export  default login; 