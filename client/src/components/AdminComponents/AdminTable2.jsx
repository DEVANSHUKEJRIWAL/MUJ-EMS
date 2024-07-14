import axios from "axios";
import React, { useState } from "react";

function AdminTable2({ data, setData }) {
  const [data2, setData2] = useState([]);

  // Function to handle replacing the field and updating data
  const handleReplaceField = async (name, newField) => {
    try {
      // Update data with new field
      const updatedData = data.map((item) => {
        if (item.name === name) {
          return { ...item, selectedField: newField };
        }
        return item;
      });

      // Update state with updated data
      setData(updatedData);

      // Remove processed change request from data2
      const filteredData2 = data2.filter((item) => item.name !== name);
      setData2(filteredData2);

      // Send updated data to the server to update the database
      await axios.post("http://localhost:8000/updateData", { name, newField });

      // Alert user upon successful update
      alert("Data is updated successfully!");
    } catch (error) {
      // Handle and log any errors
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="stu2">
      <h2>Student Change Request</h2>
      <div className="inside2">
        <table>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Registration Number</th>
              <th>Old Elective</th>
              <th>New Elective</th>
              <th>Change it Now</th>
            </tr>
          </thead>
          <tbody>
            {data2.map((m) => (
              <tr key={m._id}>
                <td>{m.serial}</td>
                <td>{m.name}</td>
                <td>{m.regno}</td>
                <td>{m.selectedField}</td>
                <td>{m.newselectedField}</td>
                <td>
                  <button
                    className="change-button"
                    onClick={() =>
                      handleReplaceField(m.name, m.newselectedField)
                    }
                  >
                    Change
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminTable2;
