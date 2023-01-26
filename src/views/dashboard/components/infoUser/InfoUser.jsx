import React from "react";
import Close from "../../../../assets/close.png";

const InfoUser = ({ userSelected, close }) => {
  const rows = [
    { label: "ID", value: userSelected.id },
    { label: "Fist Name", value: userSelected.firstName },
    { label: "Last Name", value: userSelected.lastName },
    { label: "Age", value: userSelected.age },
    { label: "Birth Date", value: userSelected.birthDate },
    { label: "Email", value: userSelected.email },
    { label: "Gender", value: userSelected.gender },
    { label: "Maiden Name", value: userSelected.maidenName },
    { label: "University", value: userSelected.university },
    { label: "Username", value: userSelected.username },
    {
      label: "Address",
      value: `${userSelected.address.address}, ${userSelected.address.city}`,
    },
    { label: "Company", value: userSelected.company.name },
  ];
  return (
    <div className="data-group">
      <div className="modal-header">
        <span>User Details</span>
        <button className="btn-close" onClick={close}>
          <img src={Close} style={{ width: 30, height: 30 }} />
        </button>
      </div>
      {rows.map((row, idx) => (
        <article className="user-data-group" key={idx}>
          <label className="label">{row.label}:</label>
          <label className="value">{row.value}</label>
        </article>
      ))}
    </div>
  );
};

export default InfoUser;
