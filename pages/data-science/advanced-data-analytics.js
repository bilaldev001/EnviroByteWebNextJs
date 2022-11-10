import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ADAContent from "../../components/DataScience/ADAContent";
import Footer from "../../components/Layouts/Footer";
import Head from "next/head";

const AdvancedDataAnalytics = () => {
  return (
    <>
      <Head>
        <title>EnviroByte Inc. | Advanced Data Analytics</title>
        <meta
          name="keywords"
          content={
            "envirobyte Environment GHG Calgary Alberta Advanced Data Analytics"
          }
        />
        <meta
          property="og:title"
          content="EnviroByte Inc. - Advanced Data Analytics"
        />
        <meta property="og:PageType" content="website" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="https://www.envirobyte.com" />
        <meta
          property="og:url"
          content="https://www.envirobyte.com/pages/service/advancedatanalytics.js"
        />
        <meta property="og:locale" content="en" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta
          name="description"
          content="Envirobyte services are here to help you and your business...Official web site of EnviroByte, located in Calgary, Alberta, Canada."
        />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Advanced Data Analytics"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Advanced Data Analytics"
        breadcrumbUrl="/"
        bgImage=""
      />

      <ADAContent />
      <Footer />
    </>
  );
};

export default AdvancedDataAnalytics;
