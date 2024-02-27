import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetail from "../../components/Blogs/BlogDetail";
import withMainLayout from "../../components/Layouts";
import ToastContainer from "../../components/Shared/Toast";
import grayMatter from 'gray-matter';
import { getPostContent } from '../../middleware/post';


const BlogDetails = ({post}) => {
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
       <PageBanner
        pageTitle={post?.frontmatter?.title}
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Blog"
        breadcrumbUrl="/"
        bgImage="https://preview.cruip.com/open-pro/images/news-single.jpg"
      />
      <BlogDetail blogData={post} /> 
    </div>
  );
};


export async function getStaticPaths() {
  const response = await fetch('http://localhost:3000/api/blogs/getBlogs')
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();

  return {
    paths: data.newFilesPath.map((file) => ({
      params: { id:file.id },
    })),
    fallback: false,
  };

}

export async function getStaticProps({params}) {
  const response = await fetch(`http://localhost:3000/api/blogs/${params.id}`)
  if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  const contentBody = data.content;
  const { data: frontmatter, content } = grayMatter(contentBody);
  return {
    props: {
      post: {
        content,
        ...frontmatter,
      },
    },
  };

}

export default withMainLayout(BlogDetails);