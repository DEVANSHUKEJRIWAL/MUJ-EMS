import React, { useState, useEffect } from "react";
import "../Admin.css";
import StudentModal from "./StudentModal";
import ElectiveModal from "./ElectiveModal";
import SidePanelButtons from "./SidePanelButtons";
import { fetchData, fetchData2, fetchData3 } from "./Api";

function AdminSidePanel({ data, setData, searchQuery, setSearchQuery }) {
  const [branch, setBranch] = useState("");

  useEffect(() => {
    fetchData();
    fetchData2();
    fetchData3();
  }, []);

  return (
    <>
      <div className="side-panel">
        <StudentModal branch={branch} setBranch={setBranch} />

        <ElectiveModal branch={branch} setBranch={setBranch} />

        <SidePanelButtons
          data={data}
          setData={setData}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
    </>
  );
}

export default AdminSidePanel;
