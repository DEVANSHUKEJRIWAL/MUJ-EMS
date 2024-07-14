import axios from "axios";
import React, { useState } from "react";
import AdminTable1 from "./AdminTable1";
import AdminTable2 from "./AdminTable2";
import AdminTable3 from "./AdminTable3";

function AdminTable({ data, setData, searchQuery }) {
  const filteredData = data.filter((item) => {
    // Check if either the name or the selectedName or selectedField includes the searchQuery
    return (
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.selectedName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.selectedField.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  return (
    <>
      <div className="main-content">
        <AdminTable1 filteredData={filteredData}></AdminTable1>
        <AdminTable2 setData={setData}></AdminTable2>
        <AdminTable3></AdminTable3>
      </div>
    </>
  );
}

export default AdminTable;
