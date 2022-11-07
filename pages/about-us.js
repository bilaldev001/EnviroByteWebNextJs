import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import AboutUsContent from "../components/About/AboutUsContent";
import FunFacts from "../components/Common/FunFacts";
import GetStartedProject from "../components/Common/GetStartedProject";
import TeamMember from "../components/Common/TeamMember";
import Customers from "../components/Common/Customers";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>EnviroByte Inc. | About Us</title>
        <meta
          name="keywords"
          content={
            "envirobyte Environment GHG Calgary calgary Alberta About Us"
          }
        />
        <meta property="og:title" content="EnviroByte Inc. - About Us" />
        <meta property="og:PageType" content="website" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="https://www.envirobyte.com" />
        <meta
          property="og:url"
          content="https://www.envirobyte.com/pages/about-us.js"
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
        pageTitle="About Us"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="About Us"
        breadcrumbUrl="/"
        bgImage=""
      />

      <AboutUsContent />

      <FunFacts />

      <div className="pb-100">
        <GetStartedProject />
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
