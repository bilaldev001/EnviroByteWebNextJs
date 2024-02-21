import React, { useEffect, useState } from "react";
import Pagination from "../Utils/Pagination";
import BlogCard from "./BlogCard";
import DummyBlogs from "./DummyBlogs.json";
import NewsLetter from "./NewsLetter";

const BlogsComponent = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem("clickCount");
    if (storedCount) {
      setClickCount(parseInt(storedCount, 10));
    }
  }, []);

  const handleBlogClick = () => {
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;
      localStorage.setItem("clickCount", newCount.toString());
      return newCount;
    });
  };

  return (
    <div className="bg-[#ffffff] dark:bg-[#282828] transition">
      <div className="pt-100 pb-70 container mx-auto">
        {/* Heading */}
        <div className="section-title">
          <h2 className="dark:text-[#ffffff]">Latest Articles</h2>
        </div>
        {/* Blogs Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {DummyBlogs.data.length &&
            DummyBlogs.data.map((data, index) => (
              <BlogCard data={data} key={index} onBlogClick={handleBlogClick} />
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

export default BlogsComponent;
