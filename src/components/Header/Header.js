import React from "react";
import "./Header.css";
import logo from './food.png';
const Header = () => {
   return (
      <header className="header">
         <div className="container">
            <div className="logo-section">
               <img src={logo} alt="logo" />
            </div>
            <nav className="navigation-section">
               <a href="/meals">meals</a>
               <a href="/Contact-us">Contact-us</a>
               <a href="/about-us">About us</a>
            </nav>
         </div>
      </header>
   );
};

export default Header;
