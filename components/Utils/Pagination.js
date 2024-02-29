import { useRouter } from "next/router";
import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({ totalPages, currentPage, setCurrentPage }) {
  const router = useRouter();
  // Invoke when user click to request another page.
  const handlePageClick = async (event) => {
    setCurrentPage(event.selected + 1);
    // currentPage = event.selected + 1;
    // router.push({ query: { page: currentPage } });
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
        initialPage={currentPage - 1}
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
