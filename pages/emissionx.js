import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import EmissionXContent from "../components/EmissionX/EmissionXContent";
import FunFacts from "../components/Common/FunFacts";
import GetStartedProject from "../components/Common/GetStartedProject";
import Head from "next/head";
import Footer from "../components/Layouts/Footer";

const EmissionX = () => {
  return (
    <>
      <Head>
        <title>EnviroByte Inc. | EmissionX</title>
        <meta
          name="keywords"
          content={"envirobyte Environment GHG Calgary Alberta EmissionX"}
        />
        <meta property="og:title" content="EnviroByte Inc. - EmissionX" />
        <meta property="og:PageType" content="website" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="https://www.envirobyte.com" />
        <meta
          property="og:url"
          content="https://www.envirobyte.com/pages/emissionx.js"
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
        pageTitle="EmissionX"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="EmissionX"
        breadcrumbUrl="/"
        bgImage=""
      />

      <EmissionXContent />

      <FunFacts />

      <div className="pb-100">
        <GetStartedProject />
      </div>

      <Footer />
    </>
  );
};

export default EmissionX;
