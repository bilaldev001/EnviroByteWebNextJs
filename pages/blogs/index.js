import React from "react";
import Head from "next/head";
import BlogsComponent from "../../components/Blogs/BlogsComponent";
import withMainLayout from "../../components/Layouts";

const Blogs = ({ posts, totalPages, currentPage }) => {
  return (
    <div>
      <Head>
        <title>Blogs | EnviroByte</title>
        <meta
          name="keywords"
          content={
            "Alberta GHG Reporting, Life Cycle Assessment, Environmental Product Declaration"
          }
        />
        <meta property="og:title" content="EnviroByte - Blogs" />
        <meta property="og:PageType" content="website" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EnviroByte" />
        <meta property="og:url" content="https://www.envirobyte.com/blogs/" />
        <meta property="og:locale" content="en" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta
          name="description"
          content="EnviroByte uses CI/CD to automate the process of calculating GHG emissions for Alberta TIER, BC GHG regulation, ECCC GHGRP, ECCC NPRI."
        />
      </Head>
      <BlogsComponent
        posts={posts}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const page = query.page || 1;
  const perPage = 1;

  const response = await fetch(
    `${process.env.BACKEND_URL}/api/blogs/getBlogs?page=${page}&perPage=${perPage}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  const { blogs, totalPages } = data;
  const currentPage = +page;

  if (!data || blogs?.length === 0) {
    return {
      props: {
        posts: [],
        totalPages: 0,
        currentPage,
      },
    };
  }

  return {
    props: {
      posts: blogs,
      totalPages,
      currentPage,
    },
  };
}

export default withMainLayout(Blogs);
