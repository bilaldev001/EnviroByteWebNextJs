import React from "react";
import Head from "next/head";
import PageBanner from "../../components/Common/PageBanner";
import BlogsComponent from "../../components/Blogs/BlogsComponent";
import withMainLayout from "../../components/Layouts";
import { getPostContent } from '../../middleware/post';
import grayMatter from 'gray-matter'; 

const Blogs = ({posts}) => {
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
      <PageBanner
        pageTitle="Blogs"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Blogs"
        breadcrumbUrl="/"
        bgImage=""
      />
      <BlogsComponent posts={posts} />
    </div>
  );
};

export async function getStaticProps() {
    const response = await fetch('http://localhost:3000/api/blogs/getBlogs')
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

    if (!data || data.newFilesPath.length === 0) {
      return {
        notFound: true,
      };
    }
    const posts = await Promise.all(data.newFilesPath.map(async (file) => {
      const fileName = file.filePath;
      const content = await getPostContent(fileName);
  
      if (!content) {
        console.error(`Failed to fetch content for ${fileName}`);
        return null;
      }
      const { data: frontmatter } = grayMatter(content);
      return {
        content,
        frontmatter,
      };
    }));
    const validPosts = posts.filter((post) => post !== null);
  
    return {
      props: {
        posts: validPosts,
      },
    };
  }
export default withMainLayout(Blogs);
