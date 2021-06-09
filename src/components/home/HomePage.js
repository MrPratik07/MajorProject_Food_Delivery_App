import React from "react";
import '../home/HomePage.css'
import Foodcard from "./foodcard/Foodcard";


const HomePage = () => {
  
  return (
    <div className="mainpage-container">
      <div className="body">
      <div className="input-search">
      <input id="search-food" placeholder="Search food item"/>
      <button id="search-food-button">Search</button>
      </div>
      <div className="food-card-container">
      <Foodcard/>
      <Foodcard/>
      <Foodcard/>
      <Foodcard/>
      <Foodcard/>
      <Foodcard/>
      </div>
      </div>
      
    </div>
  );
};

export default HomePage;
