import React from 'react';
import '../styles/HomePage.css'
import Contoller from './Controller';
const HomePage = () =>{
     return (
         <div className="mainpage-container">
             <header className="header">
                <Contoller/>
             </header>
             <div className="body">
                 This is Body
             </div>
             <footer className="footer">
                This is footer
             </footer>
         </div>
     )
}

export default HomePage;