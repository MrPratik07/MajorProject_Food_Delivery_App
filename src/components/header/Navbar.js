import React from 'react';
import { useHistory } from "react-router-dom";
import {
  FaShoppingBag, 
} from "react-icons/fa";
import '../header/Navbar.css'
const Navbar=() =>{
    const history = useHistory();

    const redirectTo = (path) => {
      history.push(path);
    };
    return(
      <div>
      
        <nav className="nav-bar">
        <div className="main-navbar">
        <p className="content" onClick={() => redirectTo("/")}>Home</p>
        <p className="content" onClick={() => redirectTo("/offers")}>Offers</p>
        <p className="content" onClick={() => redirectTo("/history")}>Order History</p>
        <p className="content" id="cart" onClick={() => redirectTo("/cart")}>Cart <FaShoppingBag id="cartlogo"/></p>
        </div>
        <div className="main-logo"> 
        <p id="foodie">Foodie Express</p>
        </div>
        <div className="right-navbar">
       <p id="logout" onClick={()=>console.log("Logout from App")}>Logout</p>
        </div>
      </nav>
      </div>
    )
}

export default Navbar;