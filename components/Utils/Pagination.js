import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({ totalPages, currentPage, setCurrentPage }) {
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <div className="w-full md:w-[80%] lg:w-[60%] mx-auto mt-4 md:mt-8  pagination-container rounded-lg ">
      <ReactPaginate
        breakLabel="..."
        nextLabel=" Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={totalPages}
        initialPage={currentPage}
        previousLabel="Prev"
        renderOnZeroPageCount={null}
        className=" flex flex-row w-full items-center justify-center  text-base font-medium text-white"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active bg-gray rounded-full"
      />
    </div>
  );
}

export default Pagination;
