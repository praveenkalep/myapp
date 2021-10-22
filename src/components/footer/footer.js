import React from "react";
import {Link} from "react-router-dom"
import "./footer.css"
function Footer (){
    return (
        <div className="footer-page">
            <div className="footer-links">
                <ul>
                    <li><Link to="/parlours">Get Serivices</Link></li>
                    <li><Link to="/application">Application</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                </ul>             
            </div>
             <div className="foot-icon">
                 <ul>
                    <li><Link to="/parlours" ><i class="zmdi zmdi-facebook material-icons-facebook"/></Link></li>
                    <li><Link to="/application" ><i class="zmdi zmdi-instagram material-icons-instagram" ></i></Link></li>
                    <li><Link to="/about" ><i class="zmdi zmdi-twitter material-icons-twitter" ></i></Link></li>
                </ul>
           </div>
           <div className="footer-privacy">
                <ul>
                    <li><Link to="/">Privacy & Policy </Link></li>
                    <li><Link to="/">Terms & Service</Link></li>      
                </ul>             
           </div>
           <p></p>
            
        </div>
    );
};
export default Footer;