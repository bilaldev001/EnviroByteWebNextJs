import React, { useEffect, useState } from "react";
import Pagination from "../Utils/Pagination";
import BlogCard from "./BlogCard";
import DummyBlogs from "./DummyBlogs.json";
import NewsLetter from "./NewsLetter";


const BlogsComponent2 = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div className="bg-[#ffffff] dark:bg-[#151719] transition">
      <div className="pt-100 pb-70 container mx-auto">
        {/* Heading */}
        <div className="section-title">
          <h2 className="dark:text-[#ffffff]">Latest Articles</h2>
        </div>
        {/* Blogs Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {posts?.map((post, index) => (
            <BlogCard data={post} key={index} />
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
    </div>
  );
};



export default BlogsComponent2;
