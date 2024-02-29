import React, { useState } from "react";
import Pagination from "../Utils/Pagination";
import BlogCard from "./BlogCard";
import NewsLetter from "./NewsLetter";

const BlogsComponent = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // Calculate the indexes of the posts to be displayed on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const totalPages = Math.ceil(posts?.length / postsPerPage);
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="bg-[#ffffff] dark:bg-[#151719] transition">
      <div className="pt-[10rem] pb-70 container mx-auto">
        {/* Heading */}
        <div className="section-title">
          <h2 className="dark:text-[#D9E3EA] text-[#393953] font-extrabold">
            Latest Articles
          </h2>
        </div>
        {/* Blogs Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {currentPosts?.map((post, index) => (
            <BlogCard data={post} key={index} />
          ))}
        </div>

        {/* Pagination Component */}
        {totalPages?.length > 1 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}

        {/* NewsLetter Component */}
        <div className="pt-[50px]">
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default BlogsComponent;
