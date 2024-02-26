import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import BioDetail from "../components/About/BioDetailsContent";
import Footer from "../components/Layouts/Footer";
import withMainLayout from "../components/Layouts";

const BioDetails = () => {
  return (
    <div>
      {/* <PageBanner
        pageTitle="Bio Details"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Team Details"
        breadcrumbUrl="/"
        bgImage=""
      /> */}

      <BioDetail />
    </div>
  );
};

export default withMainLayout(BioDetails);
