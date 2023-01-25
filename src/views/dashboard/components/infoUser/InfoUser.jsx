import React from "react";
import Close from "../../../../assets/close.png";

const InfoUser = ({ userSelected, close }) => {
  return (
    <div className="data-group">
      <div className="modal-header">
        <span>User Details</span>
        <button className="btn-close" onClick={close}>
          <img src={Close} style={{ width: 30, height: 30 }} />
        </button>
      </div>
      <article className="user-data-group">
        <label className="label">ID:</label>
        <label className="value">{userSelected.id}</label>
      </article>
      <article className="user-data-group">
        <label className="label">First Name:</label>
        <label className="value">{userSelected.firstName}</label>
      </article>
      <article className="user-data-group">
        <label className="label">Last Name:</label>
        <label className="value">{userSelected.lastName}</label>
      </article>
      <article className="user-data-group">
        <label className="label">Age:</label>
        <label className="value">{userSelected.age}</label>
      </article>
      <article className="user-data-group">
        <label className="label">Birth date:</label>
        <label className="value">{userSelected.birthDate}</label>
      </article>
      <article className="user-data-group">
        <label className="label">Email:</label>
        <label className="value">{userSelected.email}</label>
      </article>
      <article className="user-data-group">
        <label className="label">Gender:</label>
        <label className="value">{userSelected.gender}</label>
      </article>
      <article className="user-data-group">
        <label className="label">Maiden Name:</label>
        <label className="value">{userSelected.maidenName}</label>
      </article>
      <article className="user-data-group">
        <label className="label">University:</label>
        <label className="value">{userSelected.university}</label>
      </article>
      <article className="user-data-group">
        <label className="label">Username:</label>
        <label className="value">{userSelected.username}</label>
      </article>
      <article className="user-data-group">
        <label className="label">Address:</label>
        <label className="value">{`${userSelected.address.address}, ${userSelected.address.city}`}</label>
      </article>
      <article className="user-data-group">
        <label className="label">Company:</label>
        <label className="value">{userSelected.company.name}</label>
      </article>
    </div>
  );
};

export default InfoUser;
