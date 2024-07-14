import "../Faculty.css";
import React, { useState } from "react";

function FacultyMainContent({
  filteredData,
  filteredAndAssignedData,
  facultyAssignments,
}) {
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query

  return (
    <div className="main-content">
      <div className="stu">
        <h2>Student Master Data</h2>
        <div className="inside">
          <table>
            <thead>
              <tr>
                <th>S.no</th>
                <th>Name</th>
                <th>Registration Number</th>
                <th>Branch</th>
                <th>Open Elective</th>
                <th>Faculty</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((e) => (
                <tr key={e._id}>
                  <td>{e.serial}</td>
                  <td>{e.name}</td>
                  <td>{e.regno}</td>
                  <td>{e.selectedName}</td>
                  <td>{e.selectedField}</td>
                  <td>{facultyAssignments[e.name] || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="stu2">
        <h2>Student Change Request</h2>
        <div className="inside2">
          <table>
            <thead>
              <tr>
                <th>S.no</th>
                <th>Name</th>
                <th>Registration Number</th>
                <th>Branch</th>
                <th>Open Elective</th>
                <th>Faculty</th>
              </tr>
            </thead>
            <tbody>
              {filteredAndAssignedData.map((m) => (
                <tr key={m._id}>
                  <td>{m.serial}</td>
                  <td>{m.name}</td>
                  <td>{m.regno}</td>
                  <td>{m.selectedName}</td>
                  <td>{m.selectedField}</td>
                  <td>{m.faculty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FacultyMainContent;
