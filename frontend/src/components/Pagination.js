import React, { useState } from "react";

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <nav className="flex justify-center" aria-label="Pagination">
      <ul className="flex">
        {generatePageNumbers().map((pageNumber) => (
          <li key={pageNumber}>
            <button
              className={`px-4 py-2 rounded-full ${
                pageNumber === currentPage
                  ? "bg-gray-900 text-white"
                  : "bg-gray-200 text-gray-900"
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
