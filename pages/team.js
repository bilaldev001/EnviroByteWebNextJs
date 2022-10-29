import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import TeamMemberContent from "../components/Team/TeamMemberContent";
import Footer from "../components/Layouts/Footer";

const Team = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Team"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Our Team Member"
        breadcrumbUrl="/"
        bgImage="/images/page-title-bg-5.jpg"
      />

      <TeamMemberContent />

      <Footer />
    </>
  );
};

export default Team;
