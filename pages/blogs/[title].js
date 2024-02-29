import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetail from "../../components/Blogs/BlogDetail";
import withMainLayout from "../../components/Layouts";
import ToastContainer from "../../components/Shared/Toast";
import grayMatter from "gray-matter";
import { allBlogs } from "contentlayer/generated";

const BlogDetails = ({ post }) => {
  return (
    <div>
      <Head>
        <title>Blog | EnviroByte</title>
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
      <ToastContainer />
      <BlogDetail blogData={post} />
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((blog) => ({
      params: { title: blog.title },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allBlogs.find((blog) => blog.title === params.title);

  return { props: { post } };
}

export default withMainLayout(BlogDetails);
