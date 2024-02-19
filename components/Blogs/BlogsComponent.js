import React, { useEffect, useState } from "react";
import Pagination from "../Utils/Pagination";
import BlogCard from "./BlogCard";
import DummyBlogs from "./DummyBlogs.json";
import NewsLetter from "./NewsLetter";

const BlogsComponent = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="pt-100 pb-70 bg-white container mx-auto">
      {/* Heading */}
      <div className="section-title">
        <h2>Latest Articles</h2>
      </div>
      {/* Blogs Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {DummyBlogs.data.length &&
          DummyBlogs.data.map((data, index) => (
            <BlogCard data={data} key={index} />
          ))}
      </div>

      {/* Pagination Component */}
      <Pagination
        itemsPerPage={DummyBlogs?.limit}
        totalPages={DummyBlogs?.total / 10}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* NewsLetter Component */}
      <NewsLetter />
    </div>
  );
};

export default BlogsComponent;
