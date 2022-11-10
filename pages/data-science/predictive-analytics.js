import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import PMAContent from "../../components/DataScience/PMAContent";
import Footer from "../../components/Layouts/Footer";
import Head from "next/head";

const PredictiveAnalytics = () => {
  return (
    <>
      <Head>
        <title>EnviroByte Inc. | Predictive Analytics</title>
        <meta
          name="keywords"
          content={
            "envirobyte Environment GHG Calgary calgary Alberta Predictive Analytics"
          }
        />
        <meta
          property="og:title"
          content="EnviroByte Inc. - Predictive Analytics"
        />
        <meta property="og:PageType" content="website" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="https://www.envirobyte.com" />
        <meta
          property="og:url"
          content="https://www.envirobyte.com/pages/datascience/predictiveanalytics.js"
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
        pageTitle="Predictive Analytics"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Predictive Analytics"
        breadcrumbUrl="/"
        bgImage="banner-bg-img3"
      />

      <PMAContent />

      <Footer />
    </>
  );
};

export default PredictiveAnalytics;
