// Navbar.js
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../img/logo.webp'; 

const Navbar = () => {
  const [isHealthDropdownOpen, setIsHealthDropdownOpen] = useState(false);
  const [isLifeDropdownOpen, setIsLifeDropdownOpen] = useState(false);

  const handleHealthDropdownClick = () => {
    setIsHealthDropdownOpen(!isHealthDropdownOpen);
    setIsLifeDropdownOpen(false); // Close life insurance menu if open
  };

  const handleLifeDropdownClick = () => {
    setIsLifeDropdownOpen(!isLifeDropdownOpen);
    setIsHealthDropdownOpen(false); // Close health insurance menu if open
  };

  // Close dropdown if clicking outside the menu
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.navbar-item')) {
        setIsHealthDropdownOpen(false);
        setIsLifeDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <img 
          src={logo} // Set the source to the imported logo
          alt="Company Logo" // Provide alt text for accessibility
          style={{
            width: '100px', // Set the desired width
            height: 'auto', // Maintain aspect ratio
          }}
        />
      </div>
      <ul className="navbar-links">
        {/* Health Insurance Dropdown */}
        <li className="navbar-item">
          <button onClick={handleHealthDropdownClick} className="dropdown-btn">
            Health Insurance
          </button>
          {isHealthDropdownOpen && (
            <div className="dropdown-content life-dropdown">
              <a href="/">Health Insurance 101</a>
              <a href="/">Checklist</a>
              <a href="/">Top Insurers</a>
              <a href="/">Best Health Plans</a>
              <a href="/">Articles</a>
            </div>
          )}
        </li>

        {/* Life Insurance Dropdown */}
        <li className="navbar-item">
          <button onClick={handleLifeDropdownClick} className="dropdown-btn">
            Life Insurance
          </button>
          {isLifeDropdownOpen && (
            <div className="dropdown-content life-dropdown">
              <a href="/">Life Insurance Basics</a>
              <a href="/">Term Plans</a>
              <a href="/">Whole Life Plans</a>
              <a href="/">ULIPs</a>
              <a href="/">FAQs</a>
            </div>
          )}
        </li>

        {/* Regular Links */}
        <li className="navbar-item">
          <a href="/">About Us</a>
        </li>
        <li className="navbar-item">
          <a href="/">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
