import React, { useEffect } from "react";
import Head from "next/head";
import HeroHome from "../components/Simple Home/hero-home";
import FeaturesHome from "../components/Simple Home/features-home";
import FeaturesBlocks from "../components/Simple Home/features-blocks";
import FeaturesWorld from "../components/Simple Home/features-world";
import News from "../components/Simple Home/news";
import Cta from "../components/Simple Home/cta";
import withSimpleLayout from "../components/Simple Home/layout";

async function fetchData() {
  try {
    const response = await fetch("http://localhost:3000/api/blogs/getBlogs");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

const Index = () => {
  useEffect(() => {
    fetchData();
  }, []);

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

        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <FeaturesWorld />
        <News />
        <Cta />
      </>
    </div>
  );
};

export default withSimpleLayout(Index);
