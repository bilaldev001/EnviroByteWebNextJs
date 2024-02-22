import React, { useEffect } from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/Home/MainBanner";
import BriefEmissionX from "../components/Home/BriefEmissionX";
import OurServices from "../components/Home/OurServices";
import FunFacts from "../components/Common/FunFacts";
import SolutionsTab from "../components/Common/SolutionsTab";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";
import withMainLayout from "../components/Layouts";
import { ThemeProvider } from "../utils/theme";
import { getPostMeta } from '../middleware/post';


const Index =  () => {
  
    const fetchData = async () => {
      try {
      await getPostMeta();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  return (

 
    <div className={"duration-200 --font-inter font-inter"}>
      <>
        <Head>
          <title>Home | EnviroByte</title>
          <meta
            name="keywords"
            content={
              "Alberta TIER, Sustainability, ESG, GHG, oil and gas, decarbonization, PEMS, EmissionX, SOC 2"
            }
          />
          <meta property="og:title" content="EnviroByte Inc. - Home Page" />
          <meta property="og:PageType" content="website" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="EnviroByte" />
          <meta property="og:url" content="https://www.envirobyte.com/" />
          <meta property="og:locale" content="en" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0"
          />
          <meta
            name="description"
            content="EnviroByte developed scalable, cloud-based software solutions that help companies reduce their carbon footprint and improve their sustainability performance."
          />
        </Head>

        <MainBanner />

        <BriefEmissionX />

        <OurServices />

        <FunFacts />

        <SolutionsTab />
      </>
    </div>
  );
};

export default withMainLayout(Index);
