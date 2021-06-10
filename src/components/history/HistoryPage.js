import React from 'react';
import '../history/HistoryPage.css'
const HistoryPage = () =>{
    return(
        <div className="history-container">
        <div className="order-container">
        <div className="left-details">
            <h3>Order Id : 1</h3>
            <h4>Date : 10-06-2021</h4>
        </div>
        <div className="right-details">
            <h3>Rs 210</h3>
            <h4>Delivered</h4>
        </div>
        </div>
        </div>
    )
}

export default HistoryPage;