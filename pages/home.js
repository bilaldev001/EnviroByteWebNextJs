import React, { useEffect } from "react";
import SolutionsTab from "../components/Common/SolutionsTab";
import Head from "next/head";
import withMainLayout from "../components/Layouts";
import Process from "../components/Home/Process";
import NewsLetter from "../components/Blogs/NewsLetter";
import Target from "../components/Home/Target";
import Features from "../components/Home/Features";
import MainBanner from "../components/Home/MainBanner2";
import BriefEmissionX from "../components/Home/BriefEmissionXNew";
import OurServices from "../components/Home/OurServicesNew";

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

        <MainBanner />

        <Process />

        <BriefEmissionX />

        <OurServices/>

        <Features />

        {/* <OurServices /> */}

        <SolutionsTab />

        <Target />

        {/* <FunFacts /> */}

        <div className="dark:bg-[#151719] transition">
          <NewsLetter />
        </div>
      </>
    </div>
  );
};

export default withMainLayout(Index);
