import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Admin.css";
import AdminNavbar from "./AdminComponents/AdminNavbar";
import FacultySidePanel from "./FacultyComponents/FacultySidePanel";
import FacultyMainContent from "./FacultyComponents/FacultyMainContent";
import "./Faculty.css";

const Faculty = () => {
  const [data, setData] = useState([]);
  const [filteredAndAssignedData, setFilteredAndAssignedData] = useState([]); // State to hold the filtered and assigned data
  const [facultyAssignments, setFacultyAssignments] = useState({}); // State to hold the faculty assignments
  const [numGroups, setNumGroups] = useState(1); // State to hold the number of groups;
  const [facultyNames, setFacultyNames] = useState([]); // State to hold the names of faculty for each group

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.post("http://localhost:8000/sendData2", {});
      if (response.data === "fail") {
        alert("Failed to fetch data");
      } else {
        setData(
          response.data.map((item, index) => ({ ...item, serial: index + 1 }))
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const filteredData = data.filter((item) => {
    // Check if either the name or the selectedName or selectedField includes the searchQuery
    return (
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.selectedName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.selectedField.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const filteredByOpenElective = data.filter((item) => {
    return item.selectedField
      .toLowerCase()
      .includes(openElective.toLowerCase());
  });

  useEffect(() => {
    // Assign a new serial number to the filtered data for the second table
    const assignedData = filteredByOpenElective.map((item, index) => ({
      ...item,
      serial: index + 1,
    }));

    setFilteredAndAssignedData(assignedData);

    // Divide the filtered data into groups based on the number of faculties
    const studentsPerFaculty = Math.ceil(assignedData.length / numGroups);
    const assignments = {};
    for (let i = 0; i < numGroups; i++) {
      const startIndex = i * studentsPerFaculty;
      const endIndex = Math.min(
        startIndex + studentsPerFaculty,
        assignedData.length
      );
      const facultyName = facultyNames[i] || "No Faculty Assigned";

      for (let j = startIndex; j < endIndex; j++) {
        assignments[assignedData[j].name] = facultyName;
      }
    }

    setFacultyAssignments(assignments);
  }, [filteredByOpenElective, numGroups, facultyNames]);

  const convertToCSV = (data) => {
    const header = Object.keys(data[0]).join(",");
    const body = data.map((obj) => {
      return Object.values(obj).join(",");
    });
    return header + "\n" + body.join("\n");
  };

  return (
    <div>
      <AdminNavbar></AdminNavbar>
      <FacultySidePanel
        facultyAssignments={facultyAssignments}
        setFacultyAssignments={setFacultyAssignments}
        filteredData={filteredData}
        convertToCSV={convertToCSV}
        filteredAndAssignedData={filteredAndAssignedData}
        setData={setData}
        numGroups={numGroups}
        setNumGroups={setNumGroups}
        facultyNames={facultyNames}
        setFacultyNames={setFacultyNames}
      />
      <FacultyMainContent
        filteredData={filteredData}
        filteredAndAssignedData={filteredAndAssignedData}
        facultyAssignments={facultyAssignments}
      />
    </div>
  );
};

export default Faculty;
