import Reac from "react";
import "./Header.css"
import logo from "../images/logo.png"
import NavBar from "../NavBar/NavBar";

function Header () {
    return(
        <header>
        <center>
      <img src={logo} alt="" className="logo" />
     
        </center>   
            
      </header>
    );
};
export default Header;