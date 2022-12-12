import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/Home/MainBanner";
import BriefEmissionX from "../components/Home/BriefEmissionX";
import OurServices from "../components/Home/OurServices";
import FunFacts from "../components/Common/FunFacts";
import SolutionsTab from "../components/Common/SolutionsTab";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>Home | EnviroByte</title>
        <meta
          name="keywords"
          content={"envirobyte Environment GHG Calgary calgary Alberta"}
        />
        <meta property="og:title" content="EnviroByte Inc. - Home Page" />
        <meta property="og:PageType" content="website" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="https://www.envirobyte.com" />
        <meta
          property="og:url"
          content="https://www.envirobyte.com/pages/index.js"
        />
        <meta property="og:locale" content="en" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta
          name="description"
          content="Envirobyte services are here to help you and your business...Official web site of EnviroByte, located in Calgary, Alberta, Canada."
        />
      </Head>

      <Navbar />

      <MainBanner />

      <BriefEmissionX />

      <OurServices />

      <FunFacts />

      <SolutionsTab />

      <Footer />
    </>
  );
};

export default Index;
