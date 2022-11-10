import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import IoTContent from "../../components/DataScience/IoTContent";
import Footer from "../../components/Layouts/Footer";
import Head from "next/head";

const IoTAirQualityMonitoring = () => {
  return (
    <>
      <Head>
        <title>EnviroByte Inc. | IoT Air Quality Monitoring</title>
        <meta
          name="keywords"
          content={
            "envirobyte Environment GHG Calgary Alberta IoT Air Quality Monitoring"
          }
        />
        <meta
          property="og:title"
          content="EnviroByte Inc. - IoT Air Quality Monitoring"
        />
        <meta property="og:PageType" content="website" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="https://www.envirobyte.com" />
        <meta
          property="og:url"
          content="https://www.envirobyte.com/pages/service/IoT-Air-Quality-Monitoring.js"
        />
        <meta property="og:locale" content="en" />
        <meta name="twitter:site" content="@envirobyte" />
        <meta
          property="twitter:title"
          content="EnviroByte Inc. - IoT Air Quality Monitoring"
        />
        <meta
          property="twitter:url"
          content="https://www.envirobyte.com/pages/service/IoT-Air-Quality-Monitoring.js"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta
          name="description"
          content="Envirobyte services are here to help you and your business...Official web site of EnviroByte, located in Calgary, Alberta, Canada."
        />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="IoT Air Quality Monitoring"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="IoT Air Quality Monitoring"
        breadcrumbUrl="/"
        bgImage=""
      />

      <IoTContent />
      <Footer />
    </>
  );
};

export default IoTAirQualityMonitoring;
