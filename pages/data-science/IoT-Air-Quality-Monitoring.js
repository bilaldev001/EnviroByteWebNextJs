import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import IoTContent from "../../components/DataScience/IoTContent";
import Footer from "../../components/Layouts/Footer";
import Head from "next/head";
import Script from "next/script";

const IoTAirQualityMonitoring = () => {
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
          How to use low-cost sensors for air quality monitoring - EnviroByte
        </title>
        <meta
          name="keywords"
          content={"IoT, air emissions, air quality, low-cost sensor"}
        />
        <meta
          name="description"
          content="Using low-cost sensors, a high density network of sensors can be deployed to monitor air quality, such as NOx, SO2, PM, VOCs. We have developed a low-cost sensor network for air quality monitoring. We can help you deploy a low-cost sensor network for air quality monitoring."
        />
        <meta
          property="og:title"
          content="Air Emissions Monitoring using low-cost sensor and Internal of Things"
        />
        <meta property="og:PageType" content="website" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="https://www.envirobyte.com" />
        <meta
          property="og:url"
          content="https://www.envirobyte.com/pages/service/IoT-Air-Quality-Monitoring.js"
        />
        <meta property="og:locale" content="en" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
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
