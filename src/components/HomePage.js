import React from 'react';
import '../styles/HomePage.css'
import {useHistory} from "react-router-dom";
//import Contoller from './Controller';
import { FaFacebookSquare,FaInstagramSquare,FaTwitterSquare,FaWhatsappSquare,FaYoutubeSquare } from 'react-icons/fa';

const HomePage = () =>{

    const history = useHistory();

    const redirectTo = (path) =>{
        history.push(path)
    }
     return (
         <div className="mainpage-container">
            <nav className="nav-bar">
                <p onClick={() => redirectTo("/")}>Home</p>
                <p onClick={() => redirectTo("/offers")}>Offers</p>
                <p onClick={() => redirectTo("/history")}>Order History</p>
                <p onClick={() => redirectTo("/cart")}>Food Cart</p>
            </nav>
            <div className="body">
                 This is Body
             </div>
             <footer className="footer">
             <div className="social-icons">
            <FaFacebookSquare className="icon"/>
            <FaInstagramSquare className="icon"/>
            <FaTwitterSquare className="icon"/>
            <FaWhatsappSquare className="icon"/>
            <FaYoutubeSquare className="icon"/>
            <div className="address">
            <h3>Address : Newton School, Bangalore</h3>
            </div>
             </div>
             <div className="Contact-us">
                <h2 id="hear-from-us">Hear from Us</h2>
                <div id="send-email">
                <input/>
                <button>Send</button>
                </div>
                <h3 id="email">Email : Foodie@gmail.com</h3>
                </div>
             </footer>
         </div>
     )
}

export default HomePage;