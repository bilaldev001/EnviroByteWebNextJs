import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetail from "../../components/Blogs/BlogDetail";
import withMainLayout from "../../components/Layouts";
import ToastContainer from "../../components/Shared/Toast";
import grayMatter from 'gray-matter';
import { getPostContent } from '../.././middleware/post';


const BlogDetails = ({blogDatam}) => {
  console.log(posts)
  const router = useRouter();
  const { id } = router.query;

  const blogData = posts.data.find((data) => data?.id == id);
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
        pageTitle={blogData?.title}
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Blog"
        breadcrumbUrl="/"
        // bgImage="https://preview.cruip.com/open-pro/images/news-single.jpg"
      />
      <BlogDetail blogData={blogData} />
    </div>
  );
};

export async function getStaticPaths() {
  // Fetch the list of IDs from your API or wherever your data comes from
  const response = await fetch('http://localhost:3000/api/blogs/getBlogs');
  const data = await response.json();

  const paths = data.newFilesPath.map((file) => ({
    params: { id: file.filePath }, // Assuming your IDs are file paths
  }));

  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  try {
    const fileName = params.id;
    const content = await getPostContent(fileName);
    if (!content) {
      console.error(`Failed to fetch content for ${fileName}`);
      return {
        notFound: true,
      };
    }
    const { data: frontmatter } = grayMatter(content);

    return {
      props: {
        blogData: {
          content,
          frontmatter,
        },
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      notFound: true,
    };
  }
}

export default withMainLayout(BlogDetails);
