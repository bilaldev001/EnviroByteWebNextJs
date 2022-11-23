import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import PEMContent from "../../components/DataScience/PEMContent";
import Footer from "../../components/Layouts/Footer";
import Head from "next/head";
import Script from "next/script";

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
        <title>EnviroByte | Predictive Emissions Monitoring System</title>
        <meta
          name="keywords"
          content={
            "envirobyte Environment GHG Calgary Alberta Predictive Emissions Monitoring"
          }
        />
        <meta
          property="og:title"
          content="EnviroByte Inc. - Predictive Emissions Monitoring"
        />
        <meta property="og:PageType" content="website" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="https://www.envirobyte.com" />
        <meta
          property="og:url"
          content="https://www.envirobyte.com/pages/datascience/predictive-emissions-monitoring.js"
        />
        <meta property="og:locale" content="en" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta
          name="description"
          content="PEMS (predictive emissions monitoring system) is used to monitor NOx and SO2 and is permitted under Alberta 2021 CEMS code and US EPA. We have extensive experiennce with PEMS development. PEMS can used as an alternative to CEMS. The PEMS cost is about 50% of CEMS, and almost no maintenance is required."
        />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Predictive Emissions Monitoring"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Predictive Emissions Monitoring"
        breadcrumbUrl="/"
        bgImage="banner-bg-img3"
      />

      <PEMContent />

      <Footer />
    </>
  );
};

export default PredictiveEmissionsMonitoring;
