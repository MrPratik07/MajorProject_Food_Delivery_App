import React from 'react';
import '../foodcard/Foodcard.css'
//import { FaPencil } from 'react-icons/fa'
import {
    FaHamburger, 
  } from "react-icons/fa";


const Foodcard = () =>{
    return(
        <div className="food-card">
            <div className="food-image">
                <FaHamburger id="food-item-logo"/>
            </div>
            <div className="food-content">
            <div className="food-title">
            <h3 id="food-name">Ham Burger</h3>
            <h2 id="food-cost">Rs 60</h2>
            </div>
            <div className="add-to-cart">
                <button id="addfoodtocart">Add to Cart</button>
            </div>
            </div>
        </div>
    )
}

export default Foodcard;