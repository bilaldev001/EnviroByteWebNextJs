import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import BioDetail from "../components/About/BioDetailsContent";
import Footer from "../components/Layouts/Footer";

const BioDetails = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Bio Details"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Team Details"
        breadcrumbUrl="/"
        bgImage=""
      />

      <BioDetail />

      <Footer />
    </>
  );
};

export default BioDetails;
