// DropdownMenu.js
import React, { useState } from 'react';
import './DropdownMenu.css';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={handleDropdownClick} className="dropdown-btn">
        Health Insurance
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="/">Health Insurance 101</a>
          <a href="/">Checklist</a>
          <a href="/">Top Insurers</a>
          <a href="/">Best Health Plans</a>
          <a href="/">Articles</a>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
