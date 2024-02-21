import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import DataDrivenApproachContent from "../components/About/DataDrivenApproachContent";
import Head from "next/head";
import Script from "next/script";
import withMainLayout from "../components/Layouts";

const DataDrivenApproach = () => {
  return (
    <div>
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

        <title>Data Driven for Sustainability Reporting | EnviroByte </title>
        <meta
          name="keywords"
          content={
            "Sustainability, ESG, Oil and Gas Decarbonization, Carbon Offset, SOC 2"
          }
        />
        <meta
          property="og:title"
          content="EnviroByte Inc. - Data Driven Approach"
        />
        <meta property="og:PageType" content="website" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EnviroByte" />
        <meta
          property="og:url"
          content="https://www.envirobyte.com/data-driven-approach/"
        />
        <meta property="og:locale" content="en" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta
          name="description"
          content="EmissionX™ with easy verification and assurance in mind to meet SOC 2 requirements for various environmental reporting, such as Corporate Sustainability (ESG) reporting."
        />
      </Head>

      <PageBanner
        pageTitle="Data Driven Approach"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Data Driven Approach"
        breadcrumbUrl="/"
        bgImage=""
      />

      <DataDrivenApproachContent />
    </div>
  );
};

export default withMainLayout(DataDrivenApproach);
