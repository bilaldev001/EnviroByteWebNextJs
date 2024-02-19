import React from "react";
import Head from "next/head";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import BlogsComponent from "../../components/Blogs/BlogsComponent";
import ToastContainer from "../../components/Shared/Toast";

const Blogs = () => {
  return (
    <>
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
      <ToastContainer />
      <Navbar />
      <PageBanner
        pageTitle="Blogs"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Blogs"
        breadcrumbUrl="/"
        bgImage=""
      />
      <BlogsComponent />
      <Footer />
    </>
  );
};

export default Blogs;
