import React, { useState } from "react";

function AdminTable3() {
  const [data3, setData3] = useState([]);

  return (
    <>
      <div className="stu3">
        <h2>Open Electives</h2>
        <div className="inside3">
          <table>
            <thead>
              <tr>
                <th>S.no</th>
                <th>Branch</th>
                <th>Elective</th>
                <th>Seats</th>
              </tr>
            </thead>
            <tbody>
              {data3.map((n, index) => (
                <tr key={index}>
                  <td>{n.serial}</td>
                  <td>{n.name}</td>
                  <td>{n.field}</td>
                  <td>{n.totalseats}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default AdminTable3;
