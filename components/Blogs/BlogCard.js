import Image from "next/image";
import Link from "next/link";
import React from "react";
import { truncateString } from "../Utils/TruncateText";

const BlogCard = ({ data }) => {
  return (
    <Link href={`/blogs/${data.id}`} className="blog-card-container">
      <Image
        src={"https://preview.cruip.com/open-pro/images/news-inner-image.jpg"}
        alt={data?.title}
        width={100}
        height={100}
        className="w-full h-[250px] rounded"
        quality={100}
        loading="lazy"
      />
      <div className="flex align-items-center ">
        {data?.tags?.length &&
          data?.tags.map((data, index) => (
            <div key={index} className="tags my-2 me-2">
              <p className="mb-0 text-white text-[12px]">{data}</p>
            </div>
          ))}
      </div>
      <h3 className="blog-title dark:text-[#ffffff]" title={data?.title}>
        {truncateString(data?.title, 35)}
      </h3>
      <p className="blog-description text-justify" title={data?.body}>
        {truncateString(data?.body, 200)}
      </p>
      <div className="flex align-items-center ">
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
    </Link>
  );
};

export default BlogCard;
