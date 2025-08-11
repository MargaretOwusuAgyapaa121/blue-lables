import React, { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img
              src="/assets/images/logo/logobg.jpg"
              alt="Company Logo"
              className="logo-image"
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>

        {/* Hamburger for Mobile */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li className="dropdown">
            <Link to="/about">About ▾</Link>
            <div className="dropdown-content">
              <Link to="/ourstory">Our Story</Link>
              <Link to="/meet">Meet the CEO</Link>
              <Link to="/team">Our Team</Link>
              <Link to="/OurLogo">Our Logo</Link>
            </div>
          </li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/credibility">Credibility</Link></li>
          <li><Link to="/contact">Contact</Link></li>

        
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
