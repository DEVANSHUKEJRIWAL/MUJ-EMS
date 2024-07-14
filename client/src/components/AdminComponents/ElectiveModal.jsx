import "../Admin.css";
import React, { useState, useEffect } from "react";

function ElectiveModal({ branch, setBranch }) {
  const [showAddElectiveModal, setShowAddElectiveModal] = useState(false);
  const [elective, setElective] = useState("");
  const [seats, setSeats] = useState("");
  const [description, setDescription] = useState("");
  const [faculty, setFaculty] = useState("");
  const [facultyId, setFacultyId] = useState("");

  const validNamePattern = /^[A-Za-z\s]+$/;
  const openAddElectiveModal = () => setShowAddElectiveModal(true);

  const validateElectiveName = (name) => {
    return validNamePattern.test(name);
  };

  const closeAddElectiveModal = () => setShowAddElectiveModal(false);
  const handleAddElective = async (e) => {
    e.preventDefault();

    if (
      !validateElectiveName(branch) ||
      !validateElectiveName(elective) ||
      !seats ||
      !description ||
      !validateElectiveName(faculty) ||
      !facultyId
    ) {
      alert("Please fill in all fields with valid data");
      return;
    }
    const newElective = {
      _id: data3.length + 1,
      serial: data3.length + 1,
      name: branch,
      field: elective,
      totalseats: seats,
      description: description,
      faculty: faculty,
      faculty_id: facultyId,
    };

    setBranch("");
    setElective("");
    setSeats("");
    setDescription("");
    setFaculty("");
    setFacultyId("");

    closeAddElectiveModal();
    setData3([...data3, newElective]);
  };
  return (
    <>
      <button className="nav-button" onClick={openAddElectiveModal}>
        Add Elective
      </button>
      {showAddElectiveModal && (
        <div className="modal">
          <span className="close" onClick={closeAddElectiveModal}>
            &times;
          </span>
          <h2>
            <strong>Add Elective</strong>
          </h2>
          <form onSubmit={handleAddElective}>
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

            <label htmlFor="elective">Elective:</label>
            <input
              type="text"
              id="elective"
              name="elective"
              value={elective}
              onChange={(e) => setElective(e.target.value)}
              required
            />
            <br />

            <label htmlFor="seats">Seats:</label>
            <input
              type="number"
              id="seats"
              name="seats"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
              required
            />
            <br />

            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <br />

            <label htmlFor="faculty">Faculty:</label>
            <input
              type="text"
              id="faculty"
              name="faculty"
              value={faculty}
              onChange={(e) => setFaculty(e.target.value)}
              required
            />
            <br />

            <label htmlFor="facultyId">Faculty ID:</label>
            <input
              type="text"
              id="facultyId"
              name="facultyId"
              value={facultyId}
              onChange={(e) => setFacultyId(e.target.value)}
              required
            />
            <br />

            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </>
  );
}

export default ElectiveModal;
