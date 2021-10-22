import React  from "react"
import "./homepage.css";
import home from "../images/home.png"
import ourservices from "../ourservices/ourservices"
import {Link} from "react-router-dom"
import salon from "../images/Salon.png"
import bridel from "../images/bridel.png"
import Footer from "../footer/footer"
import pirathap from "../images/pirathap.png"
import vitthiya from "../images/vitthiya.png"
import kruthiga from "../images/kruthiga.png"
import me from  "../images/me.png"
 function HomePage (){
     return(
        <div className="home-page">
            <center>
            <img src={home} alt="" className="home" /> 
            <div className="image-text">
                <h1>"Good makeup reflects your story and your <br/> spirit"</h1>
                <h2>CHOOSE YOURS..</h2>
            </div>  
            <div className="text2">
                <h1>
                Our Beauty ONE makes it easier to find a salon that suits you.
                </h1>
            </div >
            <br/>
            <div >
               <Link to="/ourservices"><input type="button" value="Our Services" className="our-services-but"></input></Link>
            </div>
            <br/>
            <div  className="ser">
             <ul>
                <li><div><img src={salon} alt="" className="salon"/> 
                    <h1>Make an appointment with a parlour <br/>for your works.</h1><br/>
                       <div><Link to="/parlour"><input type="button" value="Get Your Appoinments"  className="appo"/></Link></div>
                         </div></li>
               <li><div><img src={bridel} alt="" className="salon"/>
                    <h1>Artists can be hired <br/>for your events.</h1><br/>
                       <div><Link to="/parlour"><input type="button" value="Hire An Artist"  className="appo"/></Link></div>
                         </div></li>         
             </ul>
            </div>
            <br/>
            <div className="team-div">
                <h1>Our Pillers</h1>
                <br/>
                <ul>
                    <li>
                        <div className="mem">
                        <img src ={kruthiga} alt="" className="team"/>
                        <h3>Miss.Kruthiga <br/>Suthagaran</h3>
                        </div>
                    </li>
                    <li>
                        <div  className="mem">
                        <img src ={vitthiya} alt="" className="team"/>
                        <h3>Miss.Vitthiya <br/>Premachandran</h3>
                        </div>
                    </li>
                    <li>
                        <div  className="mem">
                        <img src ={pirathap} alt="" className="team"/>
                        <h3>Mr.Sivananthan <br/>Prathap</h3>
                        </div>
                    </li>
                    <li>
                        <div  className="mem">
                        <img src ={me} alt="" className="team"/>
                        <h3>Mr.Pathmakumar <br/>Praveen</h3>
                        </div>
                    </li>
                </ul>
            </div>
            <br/> 
            <div>
                < Footer/>
            </div>
    
            </center>
        </div>
     );  
 };
 export  default HomePage;