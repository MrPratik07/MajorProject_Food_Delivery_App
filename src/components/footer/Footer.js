import React from 'react';
import '../footer/Footer.css'
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaTwitterSquare,
    FaWhatsappSquare,
    FaYoutubeSquare,
  } from "react-icons/fa";
  
const Footer=() =>{
    return(
        <footer className="footer">
        <div>
          <div className="social-icons">
            <FaFacebookSquare className="icon" />
            <FaInstagramSquare className="icon" />
            <FaTwitterSquare className="icon" />
            <FaWhatsappSquare className="icon" />
            <FaYoutubeSquare className="icon" />
          </div>
            <div className="address">
            <h3>Address : Newton School, Bangalore</h3>
            </div>
        </div>
        <div className="Contact-us">
          <h2 id="hear-from-us">Hear from Us</h2>
          <div id="send-email">
            <input  id="enter-email" placeholder="Enter email"/>
            <button id="send">Send</button>
          </div>
          <h3 id="email">Email : Foodie@gmail.com</h3>
        </div>
      </footer>
    )
}

export default Footer;