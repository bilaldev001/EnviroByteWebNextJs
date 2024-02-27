import Link from "next/link";
import React from "react";
import { truncateString } from "../Utils/TruncateText";
import ImageDisplay from "../Utils/Image";

const BlogCard = ({ data }) => {
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
    <Link href={`/blogs/${data?.id}`} className="blog-card-container">
      <ImageDisplay
        src={"https://preview.cruip.com/open-pro/images/news-inner-image.jpg"}
        alt={data?.title}
        className="w-full h-[250px] rounded"
        quality={100}
        loading="lazy"
      />
      <div className="flex align-items-center ">
        {data?.tags?.length &&
          data?.tags.map((data, index) => (
            <div
              key={index}
              className={`inline-flex text-center py-1 px-3 rounded-full transition duration-150 ease-in-out my-2 me-2 ${tagColor(
                data
              )}`}
            >
              <p className="mb-0 text-white text-[12px]">{data}</p>
            </div>
          ))}
      </div>
      <h3
        className="blog-title dark:text-[#D9E3EA] text-[#393953]"
        title={data?.title}
      >
        {truncateString(data?.title, 70)}
      </h3>
      {data?.description &&
        <p className="blog-description text-justify" title={data?.description}>
          {truncateString(data?.description, 100)}
        </p>
      }
      <div className="flex align-items-center mt-2 ">
        <img
          src="https://preview.cruip.com/open-pro/images/news-author-06.jpg"
          alt="user-img"
          className="w-[30px] h-[30px] rounded-full"
        />
        <h5 className="mx-3 dark:text-[#D9E3EA]">{data?.author || ""}</h5>
        <p>{new Date(data?.createdAt).toLocaleDateString()}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
