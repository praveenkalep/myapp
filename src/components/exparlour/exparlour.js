import React from "react";
import "./exparlour.css"
import ParImg from "../images/parlour.png";
import exparlour from "../images/exparlour.png"
import Bridel from "../images/bridal.png"
import Bleach from "../images/bleaching.png"
import Makeup from "../images/makeup.png"
import Eye from "../images/eyebrow.png"
import Haircut from "../images/haircut.png"
import Haircolor from "../images/haircolor.png"
import Nail from "../images/nailart.png"
import Mehndi from "../images/mehndi.png"
import Hairstraight from "../images/hairstraight.png"
import {Link} from "react-router-dom"
import Footer from "../footer/footer";

function Exparlour (){
    return (
        <div className="exparlour-page">
            <header>
                <img src={ParImg} alt="" className="expar-log" />
                <h1>Hair And Beauty Salon</h1>
            </header>
            <img src={exparlour} alt="" className="exparlour" />
            <div className="ex-img-txt">
                <h3>Hair And Beauty Salon</h3>
                <p>First Comes Trust.Then Comes Beauty</p>
            </div>
           <br/><br/>
            <br/><br/>
            <div className="packages">
            <h3>Packages</h3>
            <ul className="line"> 
              <li><div className="parl"><img src={Bridel} alt="" className="Par" />
                  <p>Bridal Makeup</p>
                     <Link><input type="button" name="ap" value="appoinment" className="apmnt" />
                          <input type="button" name="bk" value="Book" className="bk"/></Link>
                  </div></li>
              <li><div className="parl"><img src={Makeup} alt="" className="Par" />
                 <p>Bleaching Treatment</p>
                    <Link><input type="button" name="ap" value="appoinment" className="apmnt" />
                          <input type="button" name="bk" value="Book" className="bk"/></Link>
                    </div></li>
               <li><div className="parl"><img src={Bleach} alt="" className="Par" />
                  <p>Facial</p>
                   <Link><input type="button" name="ap" value="appoinment" className="apmnt" />
                          <input type="button" name="bk" value="Book" className="bk"/></Link>
                 </div></li>
        </ul>
        <ul className="line"> 
              <li><div className="parl"><img src={Nail} alt="" className="Par" />
                  <p>Nail Art</p>
                     <Link><input type="button" name="ap" value="appoinment" className="apmnt" />
                          <input type="button" name="bk" value="Book" className="bk"/></Link>
                  </div></li>
              <li><div className="parl"><img src={Haircut} alt="" className="Par" />
                 <p>Hair Cut</p>
                    <Link><input type="button" name="ap" value="appoinment" className="apmnt" />
                          <input type="button" name="bk" value="Book" className="bk"/></Link>
                    </div></li>
               <li><div className="parl"><img src={Haircolor} alt="" className="Par" />
                  <p>Hair Coloring</p>
                   <Link><input type="button" name="ap" value="appoinment" className="apmnt" />
                          <input type="button" name="bk" value="Book" className="bk"/></Link>
                 </div></li>
        </ul>
        <ul className="line"> 
              <li><div className="parl"><img src={Mehndi} alt="" className="Par" />
                  <p>Trendly Mehndi</p>
                     <Link><input type="button" name="ap" value="appoinment" className="apmnt" />
                          <input type="button" name="bk" value="Book" className="bk"/></Link>
                  </div></li>
              <li><div className="parl"><img src={Eye} alt="" className="Par" />
                 <p>Eye Brow</p>
                    <Link><input type="button" name="ap" value="appoinment" className="apmnt" />
                          <input type="button" name="bk" value="Book" className="bk"/></Link>
                    </div></li>
               <li><div className="parl"><img src={Hairstraight} alt="" className="Par" />
                  <p>Hair Straightening</p>
                   <Link><input type="button" name="ap" value="appoinment" className="apmnt" />
                          <input type="button" name="bk" value="Book" className="bk"/></Link>
                 </div></li>
        </ul>
        <div className="parl-disc">
        <p>Hair And Beauty Salon<br/>
        No.230 <br/>
        Kokkuvil<br/>
        Jaffna<br/>
        0766873632<br/>
        beautysalon@gmail.com</p>
        </div>
        </div>
        <center>
            <Footer />
        </center>
        </div>
    );
};
export default Exparlour;