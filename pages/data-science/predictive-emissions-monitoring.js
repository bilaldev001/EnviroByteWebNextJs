import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import PEMContent from "../../components/DataScience/PEMContent";
import Footer from "../../components/Layouts/Footer";
import Head from "next/head";
import Script from "next/script";
import withMainLayout from "../../components/Layouts";

const PredictiveEmissionsMonitoring = () => {
  return (
    <>
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          				})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          				ga('create', 'G-RMCG4QY4VP', 'auto');
          				ga('send', 'pageview');
          				ga(function(tracker) {
  						console.log(ga.q);
						});

        			`}
        </Script>
        <title>Regulatory approval processes for PEMS in Alberta</title>
        <meta
          name="description"
          content="We offer free predictive emissions monitoring systems, called OpenPEMS&trade; for industry to monitor and/or replace CEMS for its air emissions reporting."
        />
        <meta
          name="keywords"
          content={"PEMS, Predictive Emission Monitoring System"}
        />
        <meta property="og:title" content="OpenPEMS&trade;" />
        <meta property="og:PageType" content="website" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EnviroByte" />
        <meta
          property="og:url"
          content="https://www.envirobyte.com/data-science/predictive-analytics/"
        />
        <meta property="og:locale" content="en" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>

      {/* <PageBanner
        pageTitle="Predictive Emissions Monitoring"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Predictive Emissions Monitoring"
        breadcrumbUrl="/"
        bgImage="banner-bg-img3"
      /> */}

      <PEMContent />
    </>
  );
};

export default withMainLayout(PredictiveEmissionsMonitoring);
