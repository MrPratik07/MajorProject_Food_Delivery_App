import React from 'react';
import '../cartpage/CartPage.css'
import { FaPlus,FaMinus,FaHamburger } from 'react-icons/fa';
const CartPage = () =>{
    return(
        <div className="cart-container">
        <div className="cart-item">
        <h1>Your Cart Items</h1>
        <div className="food-item-cart">
                    <div className="food-logo">
                    <FaHamburger id="food-item-cart-logo"/>
                    <h3 id="cart-title">Ham Burger</h3>
                    </div>    
                
                
                
                <div className="food-price-cart">
                        <div className="cart-quantity">
            
                                <FaMinus id="minus"/>
                                <h4 id="counter">1</h4>
                                <FaPlus id="plus"/>

                        </div>
                        <h3 id="cart-price">Rs 60</h3>
                </div>
        
        
        </div>
        <div className="food-item-cart">
                    <div className="food-logo">
                    <FaHamburger id="food-item-cart-logo"/>
                    <h3 id="cart-title">Ham Burger</h3>
                    </div>    
                
                
                
                <div className="food-price-cart">
                        <div className="cart-quantity">
            
                                <FaMinus id="minus"/>
                                <h4 id="counter">1</h4>
                                <FaPlus id="plus"/>

                        </div>
                        <h3 id="cart-price">Rs 60</h3>
                </div>
        
        
        </div>
        <button id="checkout">Checkout</button>
        </div>
        </div>
    )
}

export default CartPage;