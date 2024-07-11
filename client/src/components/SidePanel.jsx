import React, { useState } from 'react';
import './SidePanel.css';
import {Link} from 'react-router-dom';

const SidePanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`side-panel2 ${isOpen ? 'open' : ''}`}>
      <button className="nav-button2 hamburger" onClick={toggleSidePanel}>
        <i className="fas fa-bars"></i>
      </button>
      <div className="side-content">
        <h3 className="Head">Menu</h3>
        <Link to="/home"> <button className="nav-button2">Home</button></Link>
        <Link to="/timetable"><button className="nav-button2">TimeTable</button></Link>
        <button className="nav-button2">Examination</button>
      </div>
    </div>
  );
};

export default SidePanel;
