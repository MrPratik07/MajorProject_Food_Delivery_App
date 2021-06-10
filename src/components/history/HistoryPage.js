import React from 'react';
import '../history/HistoryPage.css'
const HistoryPage = () =>{
    return(
        <div className="history">
        <div className="history-header">
        <h1>Your Order History</h1>
        </div>
        <div className="history-container">
        <div className="order-container">
        <div className="left-details">
            <h3 id="orderid">Order Id : 1</h3>
            <h4 id="date">Date : 10-06-2021</h4>
        </div>
        <div className="right-details">
            <h3 id="money">Rs 210</h3>
            <h4 id="order-deliver">Delivered</h4>
        </div>
        </div>

        <div className="order-container">
        <div className="left-details">
            <h3 id="orderid">Order Id : 2</h3>
            <h4 id="date">Date : 10-06-2021</h4>
        </div>
        <div className="right-details">
            <h3 id="money">Rs 510</h3>
            <h4 id="order-deliver">Delivered</h4>
        </div>
        </div>
        </div>
       </div> 
    )
}

export default HistoryPage;