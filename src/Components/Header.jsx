import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Little Lemon Logo" className="logo-image" />
        <h1 className="restaurant-name">Little Lemon</h1>
      </div>
      <nav className="nav-bar">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservation">Book Table</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
