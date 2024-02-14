import React, { useEffect, useState } from "react";
import Pagination from "../Utils/Pagination";
import BlogCard from "./BlogCard";
import DummyBlogs from "./DummyBlogs.json";

const BlogsComponent = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="pt-100 pb-70 bg-white container mx-auto">
      <div className="section-title">
        <h2>Latest Articles</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {DummyBlogs.data.length &&
          DummyBlogs.data.map((data, index) => (
            <BlogCard data={data} key={index} />
          ))}
      </div>
      <Pagination
        itemsPerPage={DummyBlogs?.limit}
        totalPages={DummyBlogs?.total / 10}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default BlogsComponent;
