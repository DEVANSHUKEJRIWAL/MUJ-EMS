function AdminTable1({ filteredData }) {
  return (
    <>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default AdminTable1;
