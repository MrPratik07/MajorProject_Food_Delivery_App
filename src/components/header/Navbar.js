import React from 'react';
import { useHistory } from "react-router-dom";
import {FaShoppingBag} from "react-icons/fa";
import '../header/Navbar.css'
const Navbar=() =>{
    const history = useHistory();

    const redirectTo = (path) => {
      history.push(path);
    };
    return(
        <nav className="nav-bar">
        <p onClick={() => redirectTo("/")}>Home</p>
        <p onClick={() => redirectTo("/offers")}>Offers</p>
        <p onClick={() => redirectTo("/history")}>Order History</p>
        <p onClick={() => redirectTo("/cart")}><FaShoppingBag/></p>
      </nav>
    )
}

export default Navbar;