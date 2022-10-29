import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/Home/MainBanner";
import BriefEmissionX from "../components/Home/BriefEmissionX";
import OurServices from "../components/Home/OurServices";
import FunFacts from "../components/Common/FunFacts";
import SolutionsTab from "../components/Common/SolutionsTab";
import Footer from "../components/Layouts/Footer";

const Index = () => {
  return (
    <>
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
