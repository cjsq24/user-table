import React from "react";
import Eye from "../../../assets/eye.png";

const useColumns = (onOpenModal) => {
  const columns = [
    {
      key: "id",
      title: "ID",
      dataKey: "id",
      width: 150,
      resizable: true,
      sortable: true,
      editable: true,
    },
    {
      key: "firstName",
      title: "First Name",
      dataKey: "firstName",
      width: 150,
      resizable: true,
      sortable: true,
      editable: true,
    },
    {
      key: "lastName",
      title: "Last Name",
      dataKey: "lastName",
      width: 150,
      resizable: true,
      sortable: true,
      editable: true,
    },
    {
      key: "age",
      title: "Age",
      dataKey: "age",
      width: 150,
      resizable: true,
      sortable: true,
      editable: true,
    },
    {
      key: "username",
      title: "Username",
      dataKey: "username",
      width: 150,
      resizable: true,
      sortable: true,
      editable: true,
    },
    {
      key: "ip",
      title: "IP",
      dataKey: "ip",
      width: 150,
      resizable: true,
      sortable: true,
      editable: true,
    },
    {
      key: "image",
      title: "Image",
      dataKey: "image",
      width: 150,
      resizable: true,
      sortable: true,
      editable: true,
      cellRenderer: ({ rowData }) => (
        <div
          style={{
            display: "flex",
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={rowData.image} style={{ width: 50, height: 50 }} />
        </div>
      ),
    },
    {
      key: "action",
      dataKey: "action",
      width: 100,
      cellRenderer: ({ rowData }) => (
        <button className="eye" onClick={() => onOpenModal(rowData)}>
          <img src={Eye} style={{ width: 30, height: 30 }} />
        </button>
      ),
    },
  ];

  return columns;
};

export default useColumns;
