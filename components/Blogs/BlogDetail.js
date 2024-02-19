import Image from "next/image";
import React from "react";
import DummyBlogs from "./DummyBlogs.json";
import BlogCard from "./BlogCard";

const BlogDetail = (props) => {
  const { blogData } = props;
  const tagColor = (tag) => {
    switch (tag) {
      case "history":
        return "text-gray-100 bg-blue-500 hover:bg-blue-600";
      case "american":
        return "text-gray-100 bg-pink-500 hover:bg-pink-600";
      case "crime":
        return "text-gray-100 bg-teal-500 hover:bg-teal-600";
      case "french":
        return "text-gray-100 bg-green-500 hover:bg-green-600";
      default:
        return "text-gray-100 bg-purple-600 hover:bg-purple-700";
    }
  };
  return (
    <div className="bg-[#ffffff] dark:bg-[#282828]">
      <div className="container mx-auto pt-100 pb-70">
        <div className="pb-70 bg-[#ffffff] dark:bg-[#282828]">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-start gap-2 flex-wrap text-xs font-medium">
              {blogData?.tags?.length &&
                blogData?.tags.map((data, index) => (
                  <div
                    key={index}
                    className={`inline-flex text-center py-1 px-3 rounded-full transition duration-150 ease-in-out ${tagColor(
                      data
                    )}`}
                  >
                    <p className="mb-0 text-white text-[12px]">{data}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="d-flex justify-start items-start gap-4">
            <div className="md:w-[40%]">
              <Image
                width={100}
                height={100}
                src={blogData?.bImage}
                className="w-full h-[250px] rounded"
                alt={blogData?.title}
                quality={100}
                loading="lazy"
              />
            </div>
            <div className="md:w-[60%]">
              <h1 className="text-[2rem] text-[#0e3496] mb-2 dark:text-[#ffffff]">
                {blogData?.title}
              </h1>
              <p className="blog-description text-justify">{blogData?.body}</p>
              <div className="flex align-items-center mt-3">
                <Image
                  src="https://preview.cruip.com/open-pro/images/news-author-06.jpg"
                  alt="user-img"
                  width={100}
                  height={100}
                  className="w-[50px] h-[50px] rounded-full"
                />
                <h5 className="mx-3 dark:text-[#ffffff]">Dummy User</h5>
                <p>{new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-3xl border-y py-3 mb-3 dark:text-[#ffffff] dark:border-gray-700">
          More
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {DummyBlogs.data.length &&
            DummyBlogs.data
              .slice(0, 3)
              .map((data, index) => <BlogCard data={data} key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
