import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ClimateChangeContent from "../../components/EmissionX/ClimateChangeContent";
import Footer from "../../components/Layouts/Footer";
import Head from "next/head";
import Script from "next/script";
import withMainLayout from "../../components/Layouts";

const ClimateChange = () => {
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
        <title>Climate Change | EnviroByte</title>
        <meta
          name="keywords"
          content={"envirobyte Environment GHG Calgary Alberta Climate Change"}
        />
        <meta property="og:title" content="EnviroByte Inc. - Climate Change" />
        <meta property="og:PageType" content="website" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EnviroByte" />
        <meta
          property="og:url"
          content="https://www.envirobyte.com/emissionx/climate-change/"
        />
        <meta property="og:locale" content="en" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta
          name="description"
          content="EmissionX™, developed by EnviroByte, provides climate change adaptation and mitigation assessment by leveraging big data techniques and machine learning algorithms"
        />
      </Head>

      {/* <PageBanner
        pageTitle="Climate Change"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Climate Change"
        breadcrumbUrl="/"
        bgImage=""
      /> */}

      <ClimateChangeContent />
    </>
  );
};

export default withMainLayout(ClimateChange);
