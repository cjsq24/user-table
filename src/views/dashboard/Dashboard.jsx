import React, { useEffect, useState } from "react";
import axios from "axios";
import BaseTable, { Column } from "react-base-table";
import Modal from "react-modal";
import "react-base-table/styles.css";
import useColumns from "./hooks/useColumns";
import InfoUser from "./components/infoUser";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    width: "50%",
  },
};

const totalRecordToShow = 10;
const Dashboard = () => {
  const [pagesToShow, setPagesToShow] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [userData, setUserData] = useState();
  const [userSelected, setUserSelected] = useState();
  const [showModal, setShowModal] = useState(false);

  const onOpenModal = (row) => {
    setUserSelected(row);
    setShowModal(true);
  };

  const columns = useColumns(onOpenModal);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data } = await axios("https://dummyjson.com/users?limit=100");
        setUserData(data.users);
        const totalPages = Math.round(data.users.length / totalRecordToShow);
        getPages(totalPages);
      } catch (e) {
        console.log(e);
      }
    };

    getUserData();
  }, []);

  const getPages = (totalPages) => {
    const pagesToShow = [];
    for (let i = 1; i <= totalPages; i++) {
      pagesToShow.push(i);
    }
    setPagesToShow(pagesToShow);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ color: "white" }}>User Table</h1>
      <BaseTable
        columns={columns}
        data={userData?.slice(
          currentPage * totalRecordToShow - totalRecordToShow,
          currentPage * totalRecordToShow
        )}
        width={900}
        height={600}
        footerHeight={50}
        footerRenderer={
          <footer className="table-footer">
            <div className="group" style={{ marginLeft: 5 }}>
              <label>Página</label>
              <select onChange={(e) => setCurrentPage(e.target.value)}>
                {pagesToShow?.map((value, idx) => (
                  <option key={idx} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          </footer>
        }
      />
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        style={customStyles}
        ariaHideApp={false}
      >
        <InfoUser
          userSelected={userSelected}
          close={() => setShowModal(false)}
        />
      </Modal>
    </div>
  );
};

export default Dashboard;
