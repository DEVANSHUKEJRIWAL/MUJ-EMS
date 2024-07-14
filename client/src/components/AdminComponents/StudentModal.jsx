import "../Admin.css";
import React, { useState, useEffect } from "react";

function StudentModal({ branch, setBranch }) {
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [programElective, setProgramElective] = useState("");
  const validNamePattern = /^[A-Za-z\s]+$/;
  const openAddStudentModal = () => setShowAddStudentModal(true);

  const validateStudentName = (name) => {
    return validNamePattern.test(name);
  };
  const closeAddStudentModal = () => setShowAddStudentModal(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form inputs
    if (
      !validateStudentName(studentName) ||
      !regNo ||
      !programElective ||
      !branch
    ) {
      alert("Please fill in all fields with valid data");
      return;
    }

    const newStudent = {
      _id: data.length + 1,
      serial: data.length + 1,
      name: studentName,
      regno: regNo,
      selectedName: branch,
      selectedField: programElective,
    };

    setData([...data, newStudent]);
    setStudentName("");
    setRegNo("");
    setBranch("");
    setProgramElective("");

    closeAddStudentModal();
  };
  return (
    <>
      <button className="nav-button" onClick={openAddStudentModal}>
        Add Student
      </button>
      {showAddStudentModal && (
        // <div className="modal-wrapper">
        <div className="modal">
          <span className="close" onClick={closeAddStudentModal}>
            &times;
          </span>
          <h2>
            <strong>Student Details</strong>
          </h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="studentName">Student Name:</label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
            />
            <br />

            <label htmlFor="regNo">Registration No:</label>
            <input
              type="text"
              id="regNo"
              name="regNo"
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
              required
            />
            <br />

            <label htmlFor="branch">Branch:</label>
            <input
              type="text"
              id="branch"
              name="branch"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              required
            />
            <br />

            <label htmlFor="programElective">Program Elective:</label>
            <input
              type="text"
              id="programElective"
              name="programElective"
              value={programElective}
              onChange={(e) => setProgramElective(e.target.value)}
              required
            />
            <br />

            <button type="submit">Submit</button>
          </form>
        </div>
        // </div>
      )}
    </>
  );
}

export default StudentModal;
