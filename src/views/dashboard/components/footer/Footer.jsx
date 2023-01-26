import React from "react";

const Footer = ({ pagesToShow, setCurrentPage, currentPage }) => {
  return (
    <footer className="table-footer">
      <div className="group" style={{ marginLeft: 5 }}>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage == 1}
        >
          Prev
        </button>
        <select
          onChange={(e) => setCurrentPage(Number(e.target.value))}
          value={currentPage}
        >
          {pagesToShow?.map((value, idx) => (
            <option key={idx} value={value}>
              {value}
            </option>
          ))}
        </select>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage == pagesToShow?.length}
        >
          Next
        </button>
      </div>
    </footer>
  );
};

export default Footer;
