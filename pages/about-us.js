import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import AboutUsContent from "../components/About/AboutUsContent";
import FunFacts from "../components/Common/FunFacts";
import GetStartedProject from "../components/Common/GetStartedProject";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";
import withMainLayout from "../components/Layouts";
import Process from "../components/Home/Process";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us | EnviroByte</title>
        <meta
          name="keywords"
          content={
            "Alberta GHG Reporting, Life Cycle Assessment, Environmental Product Declaration"
          }
        />
        <meta property="og:title" content="EnviroByte - About Us" />
        <meta property="og:PageType" content="website" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EnviroByte" />
        <meta
          property="og:url"
          content="https://www.envirobyte.com/about-us/"
        />
        <meta property="og:locale" content="en" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta
          name="description"
          content="EnviroByte uses CI/CD to automate the process of calculating GHG emissions for Alberta TIER, BC GHG regulation, ECCC GHGRP, ECCC NPRI."
        />
      </Head>

      {/* <PageBanner
        pageTitle="About Us"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="About Us"
        breadcrumbUrl="/"
        bgImage=""
      /> */}

      <AboutUsContent />

      <Process/>
      {/* <FunFacts /> */}

      <GetStartedProject />
    </>
  );
};

export default withMainLayout(AboutUs);
