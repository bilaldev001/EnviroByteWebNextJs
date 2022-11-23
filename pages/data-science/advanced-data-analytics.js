import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ADAContent from "../../components/DataScience/ADAContent";
import Footer from "../../components/Layouts/Footer";
import Head from "next/head";
import Script from "next/script";

const AdvancedDataAnalytics = () => {
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
        <title>
          What is the GHG (Carbon) intensity for Canadian oil sands operations -
          EnviroByte
        </title>
        <meta
          name="keywords"
          content={
            "Petrinex, GHG, carbon, intensity, oil sands, operations, Alberta"
          }
        />
        <meta
          name="description"
          content="Using public available data from Petrinex, GHG (carbon) emissions were analyzed for Canadian in situ oil sands operations"
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
