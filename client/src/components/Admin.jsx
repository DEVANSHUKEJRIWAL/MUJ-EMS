import React, { useState } from "react";
import "./Admin.css";

import AdminNavbar from "./AdminComponents/AdminNavbar";
import AdminSidePanel from "./AdminComponents/AdminSidePanel";
import AdminTable from "./AdminComponents/AdminTable";

const Admin = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <AdminNavbar />
      <AdminSidePanel
        data={data}
        setData={setData}
        searchQuery={searchQuery}
        setBranch={setSearchQuery}
      />

      <AdminTable data={data} searchQuery={searchQuery} setData={setData} />
    </div>
  );
};

export default Admin;
