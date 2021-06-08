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
      <Foodcard/>
      </div>
      
    </div>
  );
};

export default HomePage;
