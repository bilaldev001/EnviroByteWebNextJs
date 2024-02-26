import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import EmissionXContent from "../components/EmissionX/EmissionXContent";
import FunFacts from "../components/Common/FunFacts";
import GetStartedProject from "../components/Common/GetStartedProject";
import Head from "next/head";
import Footer from "../components/Layouts/Footer";
import Script from "next/script";
import withMainLayout from "../components/Layouts";

const EmissionX = () => {
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
          EmissionX - Alberta TIER, GHG Reporting, SOC Report, GHG Software,
          NPRI
        </title>
        <meta
          name="keywords"
          content={
            "Alberta TIER, GHG Reporting, SOC Report, GHG Software, NPRI Reporting"
          }
        />
        <meta
          name="description"
          content="EmissionX™ brings data science and software development techniques - CI/CD processes to GHG reporting. EmissionX offers the most flexibilities for various GHG reporting requirements with maximum transparency and auditability."
        />
        <meta property="og:title" content="EnviroByte Inc. - EmissionX" />
        <meta property="og:PageType" content="website" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EmissionX" />
        <meta
          property="og:url"
          content="https://www.envirobyte.com/emissionx/"
        />
        <meta property="og:locale" content="en" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>

      {/* <PageBanner
        pageTitle="EmissionX"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="EmissionX"
        breadcrumbUrl="/"
        bgImage=""
      /> */}

      <EmissionXContent />

      {/* <FunFacts /> */}

      {/* <div className="pb-100">
        <GetStartedProject />
      </div> */}
    </>
  );
};

export default withMainLayout(EmissionX);
