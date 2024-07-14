import "../Faculty.css";
import axios from "axios";

import React, { useEffect, useState } from "react";

function FacultySidePanel({
  facultyAssignments,
  setFacultyAssignments,
  filteredData,
  convertToCSV,
  filteredAndAssignedData,
  setData,
  numGroups,
  setNumGroups,
  facultyNames,
  setFacultyNames,
}) {
  const [openElective, setOpenElective] = useState(""); // State to hold the entered open elective

  const handleGroupAssignment = () => {
    const studentsPerGroup = Math.ceil(filteredData.length / numGroups);
    const groups = [];

    for (let i = 0; i < numGroups; i++) {
      const startIndex = i * studentsPerGroup;
      const endIndex = Math.min(
        startIndex + studentsPerGroup,
        filteredData.length
      );
      const groupStudents = filteredData.slice(startIndex, endIndex);

      const facultyName = facultyNames[i] || "No Faculty Assigned";

      groupStudents.forEach((student) => {
        groups.push({ ...student, faculty: facultyName });
      });
    }

    setData(groups);
    setFacultyAssignments({}); // Reset faculty assignments
  };
  const handleSave = () => {
    // Save the faculty names entered in the first table
    const updatedFacultyAssignments = { ...facultyAssignments };

    // Loop through facultyNames and update facultyAssignments accordingly
    facultyNames.forEach((name, index) => {
      updatedFacultyAssignments[index] = name;
    });

    setFacultyAssignments(updatedFacultyAssignments);

    // Save faculty names to the database
    axios
      .post("http://localhost:8000/saveFacultyNames", {
        facultyNames: Object.values(updatedFacultyAssignments),
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error saving faculty names:", error);
      });
  };
  const handleDownload = () => {
    // Function to handle downloading student list
    const filename = "student_list.csv";
    const csv = convertToCSV(filteredAndAssignedData);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    if (navigator.msSaveBlob) {
      // IE 10+
      navigator.msSaveBlob(blob, filename);
    } else {
      const link = document.createElement("a");
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };

  return (
    <div className="side-panel">
      <input
        type="text"
        placeholder="Filter by Open Elective"
        value={openElective}
        onChange={(e) => setOpenElective(e.target.value)}
      />
      <input
        type="number"
        value={numGroups}
        onChange={(e) => setNumGroups(parseInt(e.target.value))}
      />
      <button onClick={handleGroupAssignment}>Assign Faculty</button>

      {[...Array(numGroups)].map((_, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Faculty Name for Group ${index + 1}`}
          value={facultyNames[index] || ""}
          onChange={(e) => {
            const newFacultyNames = [...facultyNames];
            newFacultyNames[index] = e.target.value;
            setFacultyNames(newFacultyNames);
          }}
        />
      ))}

      <button onClick={handleSave}>Save</button>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
}

export default FacultySidePanel;
