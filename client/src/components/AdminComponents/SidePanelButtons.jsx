import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import "../Admin.css";

function SidePanelButtons({ data, setSearchQuery, searchQuery }) {
  const downloadDataFile = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      data.map((item) => Object.values(item).join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "student_data.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <>
      <button className="nav-button" onClick={downloadDataFile}>
        Download List
      </button>
      <button className="nav-button">
        <Link to="/faculty" className="nav-button">
          Assign Faculty
        </Link>
      </button>
      <button className="nav-button">Send Reminder</button>

      <div className="ser-container">
        <h3>Dynamic Search</h3>
        <input
          className="ser-input"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </>
  );
}

export default SidePanelButtons;
