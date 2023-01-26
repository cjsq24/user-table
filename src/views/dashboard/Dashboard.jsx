import React, { useState } from "react";
import BaseTable from "react-base-table";
import Modal from "react-modal";
import "react-base-table/styles.css";
import useColumns from "./hooks/useColumns";
import InfoUser from "./components/infoUser";
import { customStyles } from "../../utils/constants";
import useGetUserData from "./hooks/useGetUserData";
import Footer from "./components/footer/Footer";

const totalRecordToShow = 10;
const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [userSelected, setUserSelected] = useState();
  const [showModal, setShowModal] = useState(false);

  const onOpenModal = (row) => {
    setUserSelected(row);
    setShowModal(true);
  };

  const columns = useColumns(onOpenModal);
  const { userData, pagesToShow } = useGetUserData(totalRecordToShow);

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
          <Footer
            pagesToShow={pagesToShow}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
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
